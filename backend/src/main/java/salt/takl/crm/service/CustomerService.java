package salt.takl.crm.service;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;
import salt.takl.crm.controller.customer.CustomerRequestDTO;
import salt.takl.crm.model.Customer;
import salt.takl.crm.repository.CustomerRepository;

import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer createCustomer(String companyName, String address, String phoneNumber, String email,
                                   List<String> projects, List<String> tags, List<CustomerRequestDTO.ContactDTO> contacts) {

        Customer customer = new Customer();
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(UUID customerId, Customer updatedCustomer) {
        Customer existingCustomer = customerRepository.findCustomerById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + customerId));
        ;

        existingCustomer.setPhoneNumber(updatedCustomer.getPhoneNumber());
        existingCustomer.setEmail(updatedCustomer.getEmail());
        existingCustomer.setAddress(updatedCustomer.getAddress());
        existingCustomer.setCompanyName(updatedCustomer.getCompanyName());

        return customerRepository.save(existingCustomer);
    }

    public void deleteCustomer(UUID customerId) {
        Customer customer = customerRepository.findCustomerById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + customerId));
        customerRepository.delete(customer);
    }

    public Customer getCustomerById(UUID id) {
        return customerRepository.findCustomerById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + id));
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
