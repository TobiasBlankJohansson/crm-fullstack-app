package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.model.Customer;
import salt.takl.crm.repository.CustomerRepository;

import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {
    private CustomerRepository customerRepository;
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Customer customer) {
        customerRepository.delete(customer);
    }

    public Customer getCustomerById(UUID id) {
        return customerRepository.getCustomersById(id);
    }
}
