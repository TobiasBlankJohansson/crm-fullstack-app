package salt.takl.crm.controller.customer;

import jakarta.validation.constraints.*;

public record CustomerRequestDTO(
        @NotBlank String companyName,
        @NotBlank String address,
        String phoneNumber,
        @Email String email
) {}