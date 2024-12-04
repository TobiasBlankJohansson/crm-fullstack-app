package salt.takl.crm.controller.project;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record ProjectRequestDTO (
        String name,
        String description,
        LocalDateTime started,
        LocalDateTime ended,
        List<UUID> customerIds
) {
}
