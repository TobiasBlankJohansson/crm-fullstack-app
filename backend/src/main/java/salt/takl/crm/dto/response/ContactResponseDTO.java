package salt.takl.crm.dto.response;

import java.util.UUID;

public record ContactResponseDTO(
        UUID id,
        String name,
        String phone,
        String email
) {}