package salt.takl.crm.dto.request;

import jakarta.validation.constraints.*;

public record CustomerRequestDTO(
        @NotBlank String companyName,
        @NotBlank String address,
        @Pattern(regexp = "^\\d{3}-\\d{3}-\\d{4}$", message = "Phone number must match XXX-XXX-XXXX") String phoneNumber,
        @Email String email
) {}