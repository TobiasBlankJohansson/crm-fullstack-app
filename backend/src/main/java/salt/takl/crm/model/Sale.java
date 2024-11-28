package salt.takl.crm.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
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

    public BigDecimal getSalesAmount() {
        return salesAmount;
    }

    public void setSalesAmount(BigDecimal salesAmount) {
        this.salesAmount = salesAmount;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    private BigDecimal salesAmount;

    public String name() {
        return this.customer.getCompanyName();
    }

    public String project() {
        return this.project.getName();
    }

    public Sale () {}

    public Sale(Customer customer, Project project, BigDecimal salesAmount) {
        this.customer = customer;
        this.project = project;
        this.salesAmount = salesAmount;
    }
}
