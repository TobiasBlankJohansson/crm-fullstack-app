package salt.takl.crm.controller.Sales;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/sales")
    public ResponseEntity<SalesResponseDTO> createSale(@RequestBody SalesCreateRequestDTO saleDTO) {
        var sale = salesService.createSale(saleDTO.name(),saleDTO.company(),saleDTO.project(),saleDTO.sale());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body();
    }

    @PutMapping("/sales/{id}")
    public ResponseEntity<SalesResponseDTO> updateSale(@PathVariable String id){
        return ResponseEntity.status(HttpStatus.CREATED).body(null);
    }

    @DeleteMapping("/sales/{id}")
    public ResponseEntity<Void> deleteSale(@PathVariable int id){
        return ResponseEntity.accepted().build();
    }

}
