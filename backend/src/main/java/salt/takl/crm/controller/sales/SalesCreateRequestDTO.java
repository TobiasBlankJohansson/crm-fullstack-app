package salt.takl.crm.controller.sales;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.math.BigDecimal;
import java.util.UUID;

public record SalesCreateRequestDTO(
        @NotNull String name,
        @NotNull UUID customer,
        @NotNull UUID project,
        @NotNull @Pattern(regexp = "\\d+(\\.\\d+)?", message = INVALID_SALE_ERROR_MESSAGE) BigDecimal sale) {

    private static final String INVALID_SALE_ERROR_MESSAGE = "Sale must be a number";
}
