package salt.takl.crm.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;
import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String companyName;
    private String address;
    private String phoneNumber;
    private String email;

    public void setUser(@NotNull User user) {
        this.user = user;
    }

    @ManyToOne(optional = true)
    @NotNull
    private User user;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Sale> sales;

    @ElementCollection(targetClass = Tag.class)
    @Enumerated(EnumType.STRING)
    private List<Tag> tags;

    @ManyToMany
    @JoinTable(
            name = "customer_project", // Name of the join table
            joinColumns = @JoinColumn(name = "customer_id"), // Foreign key for Customer
            inverseJoinColumns = @JoinColumn(name = "project_id") // Foreign key for Project
    )
    private List<Project> projects;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "customer_id")
    private List<Contact> contacts;

    public User getUser() {
        return user;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Contact> getContacts() {
        return contacts;
    }



    public Customer() {}

    public Customer(String companyName, String address, String phoneNumber, String email, List<Tag> tags, List<Contact> contacts, List<Project> projects) {
        this.companyName = companyName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.tags = tags;
        this.contacts = contacts;
        this.projects = projects;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}