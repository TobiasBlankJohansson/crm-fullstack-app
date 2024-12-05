package salt.takl.crm.controller.customer;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.util.List;

public record CustomerRequestDTO(
        @NotBlank String companyName,
        @NotBlank String address,
        String phoneNumber,
        @Email String email,
        List<String> projects,
        List<String> tags,
        List<ContactDTO> contacts
) {
    public static record ContactDTO(String name, String phone, String email) {}

}