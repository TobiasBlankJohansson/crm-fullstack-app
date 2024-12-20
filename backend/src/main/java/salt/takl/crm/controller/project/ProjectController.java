package salt.takl.crm.controller.project;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.controller.customer.CustomerSelectDto;
import salt.takl.crm.model.Project;
import salt.takl.crm.service.ProjectService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/projects")
public class ProjectController {

    private final ProjectService projectService;


    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @Operation(summary = "Create a project", description = "Creates a new project")
    @PostMapping
    public ResponseEntity<ProjectResponseDTO> createProject(@RequestBody ProjectRequestDTO projectRequestDTO) {
        var project = projectService.createProject(
                projectRequestDTO.name(),projectRequestDTO.duration(),
                projectRequestDTO.customers(),projectRequestDTO.notes());
        return new ResponseEntity<>(ProjectResponseDTO.projectToDTO(project), HttpStatus.CREATED);
    }

    @Operation(summary = "Get all projects", description = "Retrieves a list of all projects")
    @GetMapping
    public List<ProjectResponseDTO> getAllProjects() {
        return projectService.getAllProjects().stream().map(ProjectResponseDTO::projectToDTO).toList();
    }

    @Operation(summary = "Get all customers with only name and id", description = "Retrieves a list of all customers with only name and id")
    @GetMapping("/select")
    public ResponseEntity<List <ProjectSelectDto>> getCustomersSelect() {
        return ResponseEntity.ok(projectService.getAllProjects().stream().map(ProjectSelectDto::projectToDto).toList());
    }

    @Operation(summary = "Find a project by ID", description = "Retrieves a project depending on its ID")
    @GetMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> findProjectById(@PathVariable String projectId) {
        ProjectResponseDTO project = projectService.getProjectById(UUID.fromString(projectId));
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @Operation(summary = "Update a project", description = "Update the info of an existing project")
    @PutMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> updateProject(@PathVariable String projectId, @RequestBody ProjectRequestDTO projectRequestDTO) {
        Project project = projectService.updateProject(
                UUID.fromString(projectId), projectRequestDTO.name(),Integer.parseInt(projectRequestDTO.duration()),
                projectRequestDTO.customers(),projectRequestDTO.notes());
        return new ResponseEntity<>(ProjectResponseDTO.projectToDTO(project), HttpStatus.OK);
    }

    @Operation(summary = "Delete a project", description = "Delete a project by ID")
    @DeleteMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> deleteProject(@PathVariable String projectId) {
        projectService.deleteProject(UUID.fromString(projectId));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
