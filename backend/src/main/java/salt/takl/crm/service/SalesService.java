package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.model.Sale;
import salt.takl.crm.repository.SaleRepository;

import java.util.List;

@Service
public class SalesService {

    private final SaleRepository saleRepository;

    public SalesService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }
}
