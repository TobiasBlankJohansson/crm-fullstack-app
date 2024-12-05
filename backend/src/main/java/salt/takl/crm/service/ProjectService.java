package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.controller.project.ProjectRequestDTO;
import salt.takl.crm.controller.project.ProjectResponseDTO;
import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Notes;
import salt.takl.crm.model.Project;
import salt.takl.crm.repository.CustomerRepository;
import salt.takl.crm.repository.ProjectRepository;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final CustomerRepository customerRepository;

    public ProjectService(ProjectRepository projectRepository, CustomerRepository customerRepository) {
        this.projectRepository = projectRepository;
        this.customerRepository = customerRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public List<ProjectResponseDTO> getProjectsByCustomerId(UUID customerId) {
        List<Project> projects = projectRepository.findProjectsByCustomerId(customerId);
        return projects.stream().map(this::mapToDTO).toList();
    }

    public Project createProject(String name,String duration,List<String> customers, List<String> notes) {
        List<Customer> customerList = customers.stream()
                .map(customer -> customerRepository.findById(UUID.fromString(customer)).get()).toList();
        List<Notes> notesList = notes.stream().map(Notes::new).toList();
        Project project = new Project(name,Integer.parseInt(duration),notesList,customerList);
        return projectRepository.save(project);
    }

    public ProjectResponseDTO getProjectById(UUID projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new IllegalArgumentException("Project not found"));

        return mapToDTO(project);
    }

    public Project updateProject(UUID projectId,String name,int duration, List<String> customers,
                                            List<String> notes) {
        Project existingProject = projectRepository.findProjectById(projectId)
                .orElseThrow(() -> new IllegalArgumentException("Project with ID " + projectId + " not found"));

        existingProject.setName(name);
        existingProject.setDuration(duration);
        existingProject.setCustomers(customers.stream()
                .map(customer -> customerRepository.findById(UUID.fromString(customer)).get()).toList());
        existingProject.setNotes(notes.stream().map(Notes::new).toList());

        return projectRepository.save(existingProject);
    }

    public void deleteProject(UUID projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found with ID: " + projectId));
        projectRepository.delete(project);
    }

    private ProjectResponseDTO mapToDTO(Project project) {
        String duration = calculateDuration(project.getStarted(), project.getEnded());

        List<String> customers = project.getCustomers().stream()
                .map(customer -> customer.getCompanyName())
                .toList();

        List<ProjectResponseDTO.SaleDTO> sales = project.getSales().stream()
                .map(sale -> new ProjectResponseDTO.SaleDTO(
                        sale.getName(),
                        sale.getSalesAmount()
                ))
                .toList();

        List<String> notes = List.of(
                "Focus on advanced AI algorithms.",
                "Deliver by end of Q2.",
                "Collaborate with internal data science team."
        );

        return new ProjectResponseDTO(
                project.getId(),
                project.getName(),
                duration,
                customers,
                notes,
                sales
        );
    }

    private String calculateDuration(LocalDateTime start, LocalDateTime end) {
        if (start == null || end == null) return "Unknown duration";
        long months = Duration.between(start, end).toDays() / 30;
        return months + " months";
    }

    private String formatSale(BigDecimal amount) {
        if (amount == null) return "$0.00";
        return "$" + String.format("%,.2f", amount);
    }

}
