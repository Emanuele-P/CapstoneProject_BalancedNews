package ep2024.cp.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "news_sources")
public class NewsSource {
    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String domain;

    @Column(nullable = false)
    private String name;

    @Column(name = "bias_rating")
    private String biasRating;

    @Column(name = "factual_reporting")
    private String factualReporting;

    private String country;

    @Column(name = "freedom_rank")
    private String countryFreedomRank;

    @Column(name = "media_type")
    private String mediaType;

    @Column(name = "popularity")
    private String trafficPopularity;

    @Column(name = "credibility")
    private String credibilityRating;

    private String logo;
}
