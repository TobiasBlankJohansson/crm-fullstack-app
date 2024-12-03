package salt.takl.crm.controller.Sales;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.service.CustomerService;
import salt.takl.crm.service.SalesService;

import java.util.List;
import java.util.UUID;

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
    public ResponseEntity<SalesResponseDTO> createSale(@RequestBody SalesCreateRequestDTO saleDto) {
        var sale = salesService.createSale(saleDto.name(),saleDto.company(),saleDto.project(),saleDto.sale());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(SalesResponseDTO.saleToDto(sale));
    }

    @PutMapping("/sales")
    public ResponseEntity<SalesResponseDTO> updateSale(@RequestBody SalesCreateRequestDTO saleDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(null);
    }

    @DeleteMapping("/sales/{id}")
    public ResponseEntity<Void> deleteSale(@PathVariable UUID id){
        salesService.deleteSale(id);
        return ResponseEntity.accepted().build();
    }

}
