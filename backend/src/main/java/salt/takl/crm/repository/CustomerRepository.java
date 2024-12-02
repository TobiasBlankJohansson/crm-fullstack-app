package salt.takl.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import salt.takl.crm.model.Customer;

import java.util.UUID;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Customer getCustomersById(UUID id);
}