package salt.takl.crm.controller.project;

import salt.takl.crm.model.Customer;
import salt.takl.crm.model.Notes;
import salt.takl.crm.model.Project;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record ProjectResponseDTO(
        UUID id,
        String name,
        int duration,
        List<String> customers,
        List<String> notes,
        List<SaleDTO> sales
) {
    public static record SaleDTO(String name, BigDecimal sale) {}

    public static ProjectResponseDTO projectToDTO(Project project) {
        return new ProjectResponseDTO(
                project.getId(),
                project.getName(),
                project.getDuration(),
                project.getCustomers().stream().map(Customer::getCompanyName).toList(),
                project.getNotes().stream().map(Notes::getNote).toList(),
                project.getSales().stream().map(sale -> new SaleDTO(
                        sale.getName(), sale.getSalesAmount())).toList());
    }
}
