package salt.takl.crm.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Project project;

    private long salesAmount;

    public String name() {
        return this.customer.getCompanyName();
    }

    public String project() {
        return this.project.getName();
    }

    public Sale () {}

    public Sale(Customer customer, Project project, long salesAmount) {
        this.customer = customer;
        this.project = project;
        this.salesAmount = salesAmount;
    }
}
