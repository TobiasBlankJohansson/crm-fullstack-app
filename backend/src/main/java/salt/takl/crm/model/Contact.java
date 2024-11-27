package salt.takl.crm.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String firstName;
    private String lastName;

    private String email;
    private String phone;

    @ManyToOne
    private Customer customer;


    public Contact() {}

}
