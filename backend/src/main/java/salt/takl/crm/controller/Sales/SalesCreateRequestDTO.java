package salt.takl.crm.controller.Sales;

import java.math.BigDecimal;
import java.util.UUID;

public record SalesCreateRequestDTO(String name, UUID customer, UUID project, BigDecimal sale) {
}
