package salt.takl.crm.controller.Sales;

import salt.takl.crm.model.Sale;

import java.util.UUID;

public record SalesResponseDTO (
        UUID Id,
        String name,
        String customer,
        String project,
        String sales
){
    public static SalesResponseDTO saleToDto(Sale sale) {
        return new SalesResponseDTO(
                sale.getId(),
                sale.name(),
                sale.getCustomer().getCompanyName(),
                sale.getProject().getName(),
                sale.getSalesAmount()+"");
    }
}
