package salt.takl.crm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.takl.crm.model.Customer;
import salt.takl.crm.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<List <Customer>> findAll() {
        List <Customer> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }
}

