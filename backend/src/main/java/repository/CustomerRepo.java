package repository;

import model.Customer;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends ListCrudRepository<Customer, Integer> {
}
