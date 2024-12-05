package salt.takl.crm.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String note;

    @ManyToOne
    private Project project;

    public Notes() {
    }

    public Notes(String note) {
        this.note = note;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
