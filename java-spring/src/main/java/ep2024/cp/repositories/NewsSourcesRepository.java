package ep2024.cp.repositories;

import ep2024.cp.entities.NewsSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface NewsSourcesRepository extends JpaRepository<NewsSource, UUID> {
    NewsSource findByDomain(String domain);
}
