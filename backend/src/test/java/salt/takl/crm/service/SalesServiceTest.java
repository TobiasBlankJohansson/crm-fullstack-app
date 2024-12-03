package salt.takl.crm.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;
import salt.takl.crm.model.Sale;
import salt.takl.crm.repository.CustomerRepository;
import salt.takl.crm.repository.ProjectRepository;
import salt.takl.crm.repository.SaleRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SalesServiceTest {

    @Mock
    private SaleRepository saleRepository;

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private ProjectRepository projectRepository;

    @InjectMocks
    private SalesService salesService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllSales_shouldReturnSales() {
        var sales = List.of(
                new Sale("Sale1", new Customer(), new Project(), BigDecimal.valueOf(100)),
                new Sale("Sale2", new Customer(), new Project(), BigDecimal.valueOf(200))
        );
        when(saleRepository.findAll()).thenReturn(sales);

        var result = salesService.getAllSales();

        assertEquals(2, result.size());
        verify(saleRepository, times(1)).findAll();
    }

    @Test
    void createSale_shouldCreateAndReturnSale() {
        var customerId = UUID.randomUUID();
        var projectId = UUID.randomUUID();
        var customer = new Customer();
        var project = new Project();
        var sale = new Sale("Sale1", customer, project, BigDecimal.valueOf(100));
        var salesAmount = "100";

        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(projectRepository.findById(projectId)).thenReturn(Optional.of(project));
        when(saleRepository.save(any(Sale.class))).thenReturn(sale);

        var result = salesService.createSale("Sale1", customerId, projectId, salesAmount);

        assertNotNull(result);
        assertEquals("Sale1", result.getName());
        assertEquals(BigDecimal.valueOf(100), result.getSalesAmount());
        verify(customerRepository, times(1)).findById(customerId);
        verify(projectRepository, times(1)).findById(projectId);
        verify(saleRepository, times(1)).save(any(Sale.class));
    }

    @Test
    void createSale_shouldThrowException_whenCustomerNotFound() {
        var customerId = UUID.randomUUID();
        var projectId = UUID.randomUUID();
        when(customerRepository.findById(customerId)).thenReturn(Optional.empty());

        var exception = assertThrows(NoSuchElementException.class, () ->
                salesService.createSale("Sale1", customerId, projectId, "100")
        );

        assertEquals("Company with ID " + customerId + " not found", exception.getMessage());
    }

    @Test
    void updateSale_shouldUpdateAndReturnSale() {
        var saleId = UUID.randomUUID();
        var customerId = UUID.randomUUID();
        var projectId = UUID.randomUUID();
        var customer = new Customer();
        var project = new Project();
        var oldSale = new Sale("OldSale", customer, project, BigDecimal.valueOf(100));

        when(saleRepository.findById(saleId)).thenReturn(Optional.of(oldSale));
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(projectRepository.findById(projectId)).thenReturn(Optional.of(project));
        when(saleRepository.save(any(Sale.class))).thenReturn(oldSale);

        var result = salesService.updateSale(saleId, "UpdatedSale", customerId, projectId, "200");

        assertEquals("UpdatedSale", result.getName());
        assertEquals(BigDecimal.valueOf(200), result.getSalesAmount());
        verify(saleRepository, times(1)).findById(saleId);
        verify(customerRepository, times(1)).findById(customerId);
        verify(projectRepository, times(1)).findById(projectId);
    }

    @Test
    void deleteSale_shouldDeleteSale() {
        var saleId = UUID.randomUUID();
        var sale = new Sale();
        when(saleRepository.findById(saleId)).thenReturn(Optional.of(sale));

        salesService.deleteSale(saleId);

        verify(saleRepository, times(1)).findById(saleId);
        verify(saleRepository, times(1)).delete(sale);
    }

    @Test
    void getSalesByCustomerId_shouldReturnSales() {
        var customerId = UUID.randomUUID();
        var sales = List.of(new Sale(), new Sale());
        when(saleRepository.findAllByCustomer_Id(customerId)).thenReturn(sales);

        var result = salesService.getSalesByCustomerId(customerId);

        assertEquals(2, result.size());
        verify(saleRepository, times(1)).findAllByCustomer_Id(customerId);
    }

    @Test
    void getSalesByProjectId_shouldReturnSales() {
        var projectId = UUID.randomUUID();
        var sales = List.of(new Sale(), new Sale());
        when(saleRepository.findAllByProject_Id(projectId)).thenReturn(sales);

        var result = salesService.getSalesByProjectId(projectId);

        assertEquals(2, result.size());
        verify(saleRepository, times(1)).findAllByProject_Id(projectId);
    }
}
