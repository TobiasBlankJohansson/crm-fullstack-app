package salt.takl.crm.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String tag;

    @ManyToOne
    private Customer customer;

    public Tag() {
    }

    public Tag(String tag) {
        this.tag = tag;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
