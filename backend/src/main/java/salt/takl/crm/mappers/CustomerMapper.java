package salt.takl.crm.mappers;

import org.springframework.stereotype.Component;
import salt.takl.crm.dto.request.CustomerRequestDTO;
import salt.takl.crm.dto.response.ContactResponseDTO;
import salt.takl.crm.dto.response.CustomerResponseDTO;
import salt.takl.crm.model.Project;
import salt.takl.crm.model.Customer;

@Component
public class CustomerMapper {

    public CustomerResponseDTO customerToResponseDTO(Customer customer){
        return new CustomerResponseDTO(
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
                        contact.getPhone())
                ).toList(),
                customer.getTags().stream().map(Enum::name).toList()
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
