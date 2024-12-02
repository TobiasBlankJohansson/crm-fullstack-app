package salt.takl.crm.service;

import org.springframework.stereotype.Service;
import salt.takl.crm.dto.ProjectResponseDTO;
import salt.takl.crm.model.Project;
import salt.takl.crm.repository.ProjectRepository;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectResponseDTO> getAllProjects() {
        List<Project> projects = projectRepository.findAll();

        return projects.stream().map(this::mapToDTO).toList();
    }

    public List<ProjectResponseDTO> getProjectsByCustomerId(UUID customerId) {
        List<Project> projects = projectRepository.findProjectsByCustomerId(customerId);

        return projects.stream().map(this::mapToDTO).toList();
    }

    private ProjectResponseDTO mapToDTO(Project project) {
        String duration = calculateDuration(project.getStarted(), project.getEnded());

        List<String> customers = project.getCustomers().stream()
                .map(customer -> customer.getCompanyName())
                .toList();

        List<ProjectResponseDTO.SaleDTO> sales = project.getSales().stream()
                .map(sale -> new ProjectResponseDTO.SaleDTO(
                        sale.name(),
                        formatSale(sale.getSalesAmount())
                ))
                .toList();

        List<String> notes = List.of(
                "Focus on advanced AI algorithms.",
                "Deliver by end of Q2.",
                "Collaborate with internal data science team."
        );

        return new ProjectResponseDTO(
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
