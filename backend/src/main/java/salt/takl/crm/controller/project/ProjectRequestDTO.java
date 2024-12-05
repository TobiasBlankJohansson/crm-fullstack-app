package salt.takl.crm.controller.project;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record ProjectRequestDTO (
        String name,
        String duration,
        List<String> customers,
        List<String> notes
) {
}
