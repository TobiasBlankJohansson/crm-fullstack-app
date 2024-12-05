package salt.takl.crm.service;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;
import salt.takl.crm.controller.customer.CustomerRequestDTO;
import salt.takl.crm.model.Contact;
import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;
import salt.takl.crm.repository.CustomerRepository;
import salt.takl.crm.repository.ProjectRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final ProjectRepository projectRepository;

    public CustomerService(CustomerRepository customerRepository, ProjectRepository projectRepository) {
        this.customerRepository = customerRepository;
        this.projectRepository = projectRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer createCustomer(String companyName, String address, String phoneNumber, String email,
                                   List<UUID> projectsId, List<String> tags, List<CustomerRequestDTO.ContactDTO> contact) {
        List<Contact> contacts = contact.stream().map(new Contact())

        List<Project> projects = projectsId.stream().map(projectId -> projectRepository.findById(projectId)
                .orElseThrow(() -> new NoSuchElementException("Customer with ID " + projectId + " not found"))).toList();

        Customer customer = new Customer(companyName,address,phoneNumber,email,projects);
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
