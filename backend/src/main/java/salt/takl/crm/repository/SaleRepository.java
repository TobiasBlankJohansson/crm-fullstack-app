package salt.takl.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import salt.takl.crm.model.Sale;

import java.util.List;
import java.util.UUID;

@Repository
public interface SaleRepository extends JpaRepository <Sale, UUID> {
    List<Sale> findAllByCustomer_Id(UUID customerId);

    List<Sale> findAllByProject_Id(UUID projectId);
}
