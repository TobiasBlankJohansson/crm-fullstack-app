package salt.takl.crm.controller.customer;

import java.util.UUID;

public record ContactResponseDTO(
        UUID id,
        String name,
        String phone,
        String email
) {}