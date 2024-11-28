package salt.takl.crm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.takl.crm.dto.response.ContactResponseDTO;
import salt.takl.crm.dto.response.CustomerResponseDTO;
import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;
import salt.takl.crm.service.CustomerService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<List <CustomerResponseDTO>> findAll() {
        List <Customer> customers = customerService.getAllCustomers();
        List <CustomerResponseDTO> customerResponseDTOS = customers.stream()
                .map(customer -> new CustomerResponseDTO(
                        customer.getId(),
                        customer.getCompanyName(),
                        customer.getAddress(),
                        customer.getPhoneNumber(),
                        customer.getEmail(),
                        customer.getProjects().stream().map(Project::getName).toList(),
                        customer.getContacts().stream().map(contact -> new ContactResponseDTO(
                                contact.getId(),
                                contact.getFirstName(),
                                contact.getPhone(),
                                contact.getEmail())).toList(),
                        customer.getTags().stream().map(t -> t.name()).toList()
                )).toList();
        return ResponseEntity.ok(customerResponseDTOS);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDTO> findById(@PathVariable String customerId) {
        Customer customer = customerService.getCustomerById(UUID.fromString(customerId));
        List<ContactResponseDTO> contacts = customer.getContacts()
                .stream()
                .map(contact -> new ContactResponseDTO(contact.getId(), contact.getFirstName(), contact.getPhone(), contact.getEmail())).toList();
        List<String> projects = customer.getProjects()
                .stream()
                .map(Project::getName)
                .toList();
        CustomerResponseDTO result = new CustomerResponseDTO(
                customer.getId(),
                customer.getCompanyName(),
                customer.getAddress(),
                customer.getPhoneNumber(),
                customer.getEmail(),
                projects,
                contacts,
                customer.getTags().stream().map(t -> t.name()).toList()
        );
        return ResponseEntity.ok(result);
    }
}

