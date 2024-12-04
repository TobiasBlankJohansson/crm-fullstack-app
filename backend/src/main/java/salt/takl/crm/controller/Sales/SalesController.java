package salt.takl.crm.controller.Sales;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.service.SalesService;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Tag(name = "Sales", description = "API for managing sales data")
@RestController
@RequestMapping("/api")
public class SalesController {
    private final SalesService salesService;

    public SalesController(SalesService salesService) {
        this.salesService = salesService;
    }

    @Operation(summary = "Get all sales", description = "Retrieves a list of all sales")
    @GetMapping("/sales")
    public ResponseEntity<List<SalesResponseDTO>> getSales() {
        return ResponseEntity.ok( salesService.getAllSales().stream()
                .map(SalesResponseDTO::saleToDto).toList());
    }

    @Operation(summary = "Create a new sale", description = "Creates a new sale entry")
    @PostMapping("/sales")
    public ResponseEntity<SalesResponseDTO> createSale(
            @RequestBody SalesCreateRequestDTO saleDto) {
        var sale = salesService.createSale(
                saleDto.name(),
                saleDto.customer(),
                saleDto.project(),
                saleDto.sale()
        );
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(SalesResponseDTO.saleToDto(sale));
    }

    @Operation(summary = "Update an existing sale", description = "Updates details of an existing sale by its ID")
    @PutMapping("/sales/{id}")
    public ResponseEntity<SalesResponseDTO> updateSale(
            @Parameter(description = "ID of the sale to update") @PathVariable UUID id,
            @RequestBody SalesCreateRequestDTO saleDto) {
        var sale = salesService.updateSale(
                id,
                saleDto.name(),
                saleDto.customer(),
                saleDto.project(),
                saleDto.sale()
        );
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(SalesResponseDTO.saleToDto(sale));
    }

    @Operation(summary = "Delete a sale", description = "Deletes a sale entry by its ID")
    @DeleteMapping("/sales/{id}")
    public ResponseEntity<Void> deleteSale(
            @Parameter(description = "ID of the sale to delete") @PathVariable UUID id) {
        salesService.deleteSale(id);
        return ResponseEntity.accepted().build();
    }

    @ExceptionHandler({NoSuchElementException.class})
    public ResponseEntity<String> handleException(NoSuchElementException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
