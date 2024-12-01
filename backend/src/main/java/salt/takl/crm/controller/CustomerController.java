package salt.takl.crm.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.dto.request.CustomerRequestDTO;
import salt.takl.crm.dto.response.CustomerResponseDTO;
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

    @GetMapping
    public ResponseEntity<List <CustomerResponseDTO>> findAll() {
        List <Customer> customers = customerService.getAllCustomers();
        List <CustomerResponseDTO> customerResponseDTOS = customers.stream()
                .map(customer -> customerMapper.customerToResponseDTO(customer)
                ).toList();
        return ResponseEntity.ok(customerResponseDTOS);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<CustomerResponseDTO> findById(@PathVariable String customerId) {
        Customer customer = customerService.getCustomerById(UUID.fromString(customerId));
        CustomerResponseDTO result = customerMapper.customerToResponseDTO(customer);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<CustomerResponseDTO> createCustomer(@RequestBody CustomerRequestDTO customerRequestDTO) {
        Customer customer = customerMapper.requestDTOToCustomer(customerRequestDTO);
        Customer savedCustomer = customerService.saveCustomer(customer);
        CustomerResponseDTO responseDTO = customerMapper.customerToResponseDTO(savedCustomer);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }
}

