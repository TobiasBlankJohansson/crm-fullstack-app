package salt.takl.crm.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.takl.crm.dto.request.ProjectRequestDTO;
import salt.takl.crm.dto.response.ProjectResponseDTO;
import salt.takl.crm.model.Project;
import salt.takl.crm.repository.ProjectRepository;
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

    @PostMapping
    public ResponseEntity<ProjectResponseDTO> createProject(@RequestBody ProjectRequestDTO projectRequestDTO) {
        ProjectResponseDTO createdProject = projectService.createProject(projectRequestDTO);
        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ProjectResponseDTO> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> findProjectById(@PathVariable String projectId) {
        ProjectResponseDTO project = projectService.getProjectById(UUID.fromString(projectId));
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @PutMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> updateProject(@PathVariable String projectId, @RequestBody ProjectRequestDTO projectRequestDTO) {
        ProjectResponseDTO updatedProject = projectService.updateProject(UUID.fromString(projectId), projectRequestDTO);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<ProjectResponseDTO> deleteProject(@PathVariable String projectId) {
        projectService.deleteProject(UUID.fromString(projectId));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
