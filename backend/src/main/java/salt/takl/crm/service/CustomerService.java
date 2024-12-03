package salt.takl.crm.service;

import org.springframework.stereotype.Service;
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

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(UUID customerId, Customer updatedCustomer) {
        Customer existingCustomer = customerRepository.findCustomerById(customerId);

        existingCustomer.setPhoneNumber(updatedCustomer.getPhoneNumber());
        existingCustomer.setEmail(updatedCustomer.getEmail());
        existingCustomer.setAddress(updatedCustomer.getAddress());
        existingCustomer.setCompanyName(updatedCustomer.getCompanyName());

        return customerRepository.save(existingCustomer);
    }

    public void deleteCustomer(Customer customer) {
        customerRepository.delete(customer);
    }

    public Customer getCustomerById(UUID id) {
        return customerRepository.findCustomerById(id);
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
