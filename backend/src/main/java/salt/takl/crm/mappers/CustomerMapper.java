package salt.takl.crm.mappers;

import org.springframework.stereotype.Component;
import salt.takl.crm.controller.customer.CustomerRequestDTO;
import salt.takl.crm.controller.customer.ContactResponseDTO;
import salt.takl.crm.controller.customer.CustomerResponseDTO;
import salt.takl.crm.model.Project;
import salt.takl.crm.model.Customer;

import java.util.List;

@Component
public class CustomerMapper {

    public CustomerResponseDTO customerToResponseDTO(Customer customer) {
        return new CustomerResponseDTO(
                customer.getId(),
                customer.getCompanyName(),
                customer.getAddress(),
                customer.getPhoneNumber(),
                customer.getEmail(),
                customer.getProjects() != null ? customer.getProjects().stream().map(Project::getName).toList() : List.of(),
                customer.getContacts() != null ? customer.getContacts().stream().map(contact -> new ContactResponseDTO(
                        contact.getId(),
                        contact.getFirstName(),
                        contact.getPhone(),
                        contact.getEmail())
                ).toList() : List.of(),
                customer.getTags() != null ? customer.getTags().stream().map(Enum::name).toList() : List.of()
        );
    }

    public Customer requestDTOToCustomer(CustomerRequestDTO dto) {
        Customer customer = new Customer();
        customer.setCompanyName(dto.companyName());
        customer.setAddress(dto.address());
        customer.setPhoneNumber(dto.phoneNumber());
        customer.setEmail(dto.email());
        return customer;
    }
}
