package salt.takl.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import salt.takl.crm.model.Project;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
    @Query("SELECT p FROM Project p WHERE p.started <= :currentDate AND p.ended >= :currentDate")
    List<Project> findActiveProjects(@Param("currentDate") LocalDateTime currentDate);

    @Query("SELECT p FROM Project p JOIN p.customers c WHERE c.id = :customerId")
    List<Project> findProjectsByCustomerId(@Param("customerId") UUID customerId);
}
