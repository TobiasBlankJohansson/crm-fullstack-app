package salt.takl.crm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.takl.crm.dto.response.SalesResponseDTO;
import salt.takl.crm.service.CustomerService;
import salt.takl.crm.service.SalesService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SalesController {
    private final CustomerService customerService;
    private final SalesService salesService;

    public SalesController(CustomerService customerService, SalesService salesService) {
        this.customerService = customerService;
        this.salesService = salesService;
    }

    @GetMapping("/sales")
    public ResponseEntity<List<SalesResponseDTO>> getAllSales() {
        List<SalesResponseDTO> sales = salesService.getAllSales().stream().map(sale -> new SalesResponseDTO(
                sale.name(),
                sale.getCustomer().getCompanyName(),
                sale.project(),
                sale.getSalesAmount().toPlainString()
        )).toList();

        return ResponseEntity.ok(sales);
    }
}
