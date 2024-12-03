package salt.takl.crm.controller.Sales;

import java.util.UUID;

public record SalesCreateRequestDTO(String name, UUID customer, UUID project, String sale) {
}
