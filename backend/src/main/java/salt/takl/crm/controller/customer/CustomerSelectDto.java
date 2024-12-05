package salt.takl.crm.controller.customer;

import salt.takl.crm.model.Customer;

import java.util.UUID;

public record CustomerSelectDto (String title, UUID id){
    public static CustomerSelectDto customerToDto(Customer customer) {
        return new CustomerSelectDto(customer.getCompanyName(), customer.getId());
    }
}
