package salt.takl.crm.mappers;

import org.springframework.stereotype.Component;
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
}
