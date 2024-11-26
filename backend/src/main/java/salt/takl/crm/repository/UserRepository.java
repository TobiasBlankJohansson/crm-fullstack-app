package salt.takl.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import salt.takl.crm.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}