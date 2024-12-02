package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.model.Sale;
import salt.takl.crm.repository.SaleRepository;

import java.util.List;
import java.util.UUID;

@Service
public class SalesService {

    private final SaleRepository saleRepository;

    public SalesService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public List<Sale> getAllSales() {
        List<Sale> sales = saleRepository.findAll();
        sales.forEach(sale -> System.out.println("Retrieved Sale: " + sale));
        return sales;
    }

    public List<Sale> getSalesByCustomerId(UUID customerId) {
        return saleRepository.findAllByCustomer_Id(customerId);
    }

    public List<Sale> getSalesByProjectId(UUID projectId) {
        return saleRepository.findAllByProject_Id(projectId);
    }
}
