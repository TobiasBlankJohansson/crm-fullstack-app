package salt.takl.crm.controller.project;

import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;

import java.util.UUID;

public record ProjectSelectDto(String title, UUID id){
    public static ProjectSelectDto projectToDto(Project project) {
        return new ProjectSelectDto(project.getName(), project.getId());
    }
}
