package salt.takl.crm.dto.response;

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
    public static record SaleDTO(String name, String sale) {}
}
