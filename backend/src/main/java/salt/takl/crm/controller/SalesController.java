package salt.takl.crm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.takl.crm.dto.response.SalesResponseDTO;
import salt.takl.crm.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SalesController {
    private final CustomerService customerService;

    public SalesController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/sales")
    public ResponseEntity<List<SalesResponseDTO>> getAllSales() {
        // Fetch all customers and projects to aggregate sales data
        List<SalesResponseDTO> sales = customerService.getAllCustomers().stream()
                .flatMap(customer -> customer.getProjects().stream()
                        .map(project -> new SalesResponseDTO(
                                customer.getCompanyName(),
                                customer.getCompanyName(),
                                project.getName(),
                                String.format("$%,.2f", project.getSales() / 100.0) // Format sales amount
                        )))
                .toList();

        return ResponseEntity.ok(sales);
    }
}
