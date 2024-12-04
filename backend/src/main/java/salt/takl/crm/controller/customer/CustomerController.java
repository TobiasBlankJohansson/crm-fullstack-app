package salt.takl.crm.controller.customer;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.mappers.CustomerMapper;
import salt.takl.crm.model.Customer;

import salt.takl.crm.service.CustomerService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerMapper customerMapper;

    public CustomerController(CustomerService customerService, CustomerMapper customerMapper) {
        this.customerMapper = customerMapper;
        this.customerService = customerService;
    }

    @Operation(summary = "Get all customers", description = "Retrieves a list of all customers")
    @GetMapping
    public ResponseEntity<List <CustomerResponseDTO>> findAll() {
        List <Customer> customers = customerService.getAllCustomers();
        List <CustomerResponseDTO> customerResponseDTOS = customers.stream()
                .map(customer -> customerMapper.customerToResponseDTO(customer)
                ).toList();
        return ResponseEntity.ok(customerResponseDTOS);
    }

    @Operation(summary = "Get all customers with only name and id", description = "Retrieves a list of all customers with only name and id")
    @GetMapping("/select")
    public ResponseEntity<List <CustomerSelectDto>> getCustomersSelect() {
        return ResponseEntity.ok(customerService.getAllCustomers().stream().map(CustomerSelectDto::customerToDto).toList());
    }

    @Operation(summary = "Find a customer by ID", description = "Retrieves a customer depending on its ID")
    @GetMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDTO> findById(@PathVariable String customerId) {
        Customer customer = customerService.getCustomerById(UUID.fromString(customerId));
        CustomerResponseDTO result = customerMapper.customerToResponseDTO(customer);
        return ResponseEntity.ok(result);
    }

    @Operation(summary = "Create a customer", description = "Creates a new customer")
    @PostMapping
    public ResponseEntity<CustomerResponseDTO> createCustomer(@RequestBody CustomerRequestDTO customerRequestDTO) {
        Customer customer = customerMapper.requestDTOToCustomer(customerRequestDTO);
        Customer savedCustomer = customerService.saveCustomer(customer);
        CustomerResponseDTO responseDTO = customerMapper.customerToResponseDTO(savedCustomer);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

    @Operation(summary = "Update a customer", description = "Update the info of an existing customer")
    @PutMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDTO> updateCustomer(@PathVariable String customerId, @RequestBody CustomerRequestDTO customerRequestDTO) {
        Customer updatedCustomerData = customerMapper.requestDTOToCustomer(customerRequestDTO);
        Customer updatedCustomer = customerService.updateCustomer(UUID.fromString(customerId), updatedCustomerData);
        CustomerResponseDTO responseDTO = customerMapper.customerToResponseDTO(updatedCustomer);
        return new ResponseEntity<>(responseDTO, HttpStatus.OK);
    }

    @Operation(summary = "Delete a customer", description = "Delete a customer by ID")
    @DeleteMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDTO> deleteCustomer(@PathVariable String customerId) {
        customerService.deleteCustomer(UUID.fromString(customerId));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

