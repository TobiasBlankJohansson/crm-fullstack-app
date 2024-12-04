package salt.takl.crm.controller.customer;

import java.util.List;
import java.util.UUID;

public record CustomerResponseDTO(
        UUID id,
        String company,
        String address,
        String phone,
        String email,
        List<String> project,
        List<ContactResponseDTO> contact,
        List<String> tag
) {}