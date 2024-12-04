package salt.takl.crm.controller.project;

import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Project;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record ProjectResponseDTO(
        UUID id,
        String name,
        String duration,
        List<String> customers,
        List<String> notes,
        List<SaleDTO> sales
) {
    public static record SaleDTO(String name, BigDecimal sale) {}

    public static ProjectResponseDTO projectToDTO(Project project) {
        String duration = calculateDuration(project.getStarted(), project.getEnded());

        List<String> notes = List.of(
                "Focus on advanced AI algorithms.",
                "Deliver by end of Q2.",
                "Collaborate with internal data science team."
        );

        return new ProjectResponseDTO(
                project.getId(),
                project.getName(),
                duration,
                project.getCustomers().stream().map(Customer::getCompanyName).toList(),
                notes,
                project.getSales().stream().map(sale -> new SaleDTO(sale.getName(),sale.getSalesAmount())).toList());

    }
    private static String calculateDuration(LocalDateTime start, LocalDateTime end) {
        if (start == null || end == null) return "Unknown duration";
        long months = Duration.between(start, end).toDays() / 30;
        return months + " months";
    }
}
