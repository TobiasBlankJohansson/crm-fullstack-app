package salt.takl.crm.controller.Sales;

import salt.takl.crm.model.Sale;

public record SalesResponseDTO (
        String name,
        String customer,
        String project,
        String sales
){
    public static SalesResponseDTO saleToDto(Sale sale) {
        return new SalesResponseDTO(
                sale.name(),
                sale.getCustomer().getCompanyName(),
                sale.getProject().getName(),
                sale.getSalesAmount()+"");
    }
}
