package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.model.Sale;
import salt.takl.crm.repository.CustomerRepository;
import salt.takl.crm.repository.ProjectRepository;
import salt.takl.crm.repository.SaleRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class SalesService {

    private final SaleRepository saleRepository;
    private final CustomerRepository customerRepository;
    private final ProjectRepository projectRepository;

    public SalesService(SaleRepository saleRepository, CustomerRepository customerRepository, ProjectRepository projectRepository) {
        this.saleRepository = saleRepository;
        this.customerRepository = customerRepository;
        this.projectRepository = projectRepository;
    }

    public List<Sale> getAllSales() {
        List<Sale> sales = saleRepository.findAll();
        sales.forEach(sale -> System.out.println("Retrieved Sale: " + sale));
        return sales;
    }

    public Sale createSale(String name, UUID companyId, UUID projectId, String sale) {
        var company = customerRepository.findById(companyId)
                .orElseThrow(() -> new NoSuchElementException("Company with ID " + companyId + " not found"));
        var project = projectRepository.findById(projectId)
                .orElseThrow(() -> new NoSuchElementException("Project with ID " + projectId + " not found"));
        var newSale = new Sale(name, company, project, new BigDecimal(sale));
        return saleRepository.save(newSale);
    }

    public List<Sale> getSalesByCustomerId(UUID customerId) {
        return saleRepository.findAllByCustomer_Id(customerId);
    }

    public List<Sale> getSalesByProjectId(UUID projectId) {
        return saleRepository.findAllByProject_Id(projectId);
    }
}
