package salt.takl.crm.dto.response;

import java.util.List;
import java.util.UUID;

public record CustomerResponseDTO(
        UUID id,
        String companyName,
        String address,
        String phoneNumber,
        String email,
        List<String> projects,
        List<ContactResponseDTO> contacts,
        List<String> tags
) {}