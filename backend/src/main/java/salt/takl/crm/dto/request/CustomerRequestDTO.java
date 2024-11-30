package salt.takl.crm.dto.request;

public record CustomerRequestDTO(
        String companyName,
        String address,
        String phoneNumber,
        String email
) {}
