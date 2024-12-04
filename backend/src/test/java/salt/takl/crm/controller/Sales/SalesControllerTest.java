package salt.takl.crm.controller.Sales;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;
import salt.takl.crm.model.Sale;
import salt.takl.crm.service.SalesService;

import java.math.BigDecimal;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

public class SalesControllerTest {

    private MockMvc mockMvc;

    @Mock
    private SalesService salesService;

    @InjectMocks
    private SalesController salesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(salesController).build();
    }

    @Test
    void testGetSales() throws Exception {
        var sale = new Sale("Sale1",  new Customer(), new Project(), new BigDecimal("100.00"));
        sale.setId(UUID.randomUUID());

        when(salesService.getAllSales()).thenReturn(List.of(sale));

        mockMvc.perform(get("/api/sales"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Sale1"))
                .andDo(print());

        verify(salesService, times(1)).getAllSales();
    }

    @Test
    void testCreateSale() throws Exception {
        Customer customer = new Customer();
        customer.setId(UUID.randomUUID());
        UUID customerId = customer.getId();
        Project project = new Project();
        project.setId(UUID.randomUUID());
        UUID projectId = project.getId();
        var sale = new Sale("Sale1", customer, project, new BigDecimal("100.00"));
        sale.setId(UUID.randomUUID());

        when(salesService.createSale("Sale1", customerId, projectId, new BigDecimal("100.00"))).thenReturn(sale);

        mockMvc.perform(post("/api/sales")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{" +
                                "\"name\":\"Sale1\"," +
                                "\"customer\":\"" + customerId + "\"," +
                                "\"project\":\"" + projectId + "\"," +
                                "\"sale\":\"100.00\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Sale1"))
                .andDo(print());

        verify(salesService, times(1)).createSale("Sale1", customerId, projectId, new BigDecimal("100.00"));
    }

    @Test
    void testUpdateSale() throws Exception {
        UUID saleId = UUID.randomUUID();
        Customer customer = new Customer();
        customer.setId(UUID.randomUUID());
        UUID customerId = customer.getId();
        Project project = new Project();
        project.setId(UUID.randomUUID());
        UUID projectId = project.getId();
        var sale = new Sale("UpdatedSale", customer, project, new BigDecimal("200.00"));
        sale.setId(saleId);

        when(salesService.updateSale(saleId, "UpdatedSale", customerId, projectId, new BigDecimal("200.00"))).thenReturn(sale);

        mockMvc.perform(put("/api/sales/" + saleId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{" +
                                "\"name\":\"UpdatedSale\"," +
                                "\"customer\":\"" + customerId + "\"," +
                                "\"project\":\"" + projectId + "\"," +
                                "\"sale\":\"200.00\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("UpdatedSale"))
                .andDo(print());

        verify(salesService, times(1)).updateSale(saleId, "UpdatedSale", customerId, projectId, new BigDecimal("200.00"));
    }

    @Test
    void testDeleteSale() throws Exception {
        UUID saleId = UUID.randomUUID();

        doNothing().when(salesService).deleteSale(saleId);

        mockMvc.perform(delete("/api/sales/" + saleId))
                .andExpect(status().isAccepted())
                .andDo(print());

        verify(salesService, times(1)).deleteSale(saleId);
    }

    @Test
    void testHandleNoSuchElementException() throws Exception {
        when(salesService.getAllSales()).thenThrow(new NoSuchElementException("Not Found"));

        mockMvc.perform(get("/api/sales"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Not Found"))
                .andDo(print());

        verify(salesService, times(1)).getAllSales();
    }
}
