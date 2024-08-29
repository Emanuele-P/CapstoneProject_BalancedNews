package ep2024.cp.services;

import ep2024.cp.entities.NewsSource;
import ep2024.cp.repositories.NewsSourcesRepository;
import kong.unirest.core.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class NewsSourcesService {
    @Autowired
    private NewsSourcesRepository newsSourcesRepository;

    public void saveFromJson(String jsonString) {
        JSONObject obj = new JSONObject(jsonString);

        for (String domain : obj.keySet()) {
            if (newsSourcesRepository.findByDomain(domain) == null) {
                JSONObject details = obj.getJSONObject(domain);

                NewsSource newsSource = new NewsSource();
                newsSource.setDomain(domain);
                newsSource.setName(details.optString("name", "Unknown name"));
                newsSource.setBiasRating(details.optString("bias_rating", "Center"));
                newsSource.setFactualReporting(details.optString("factual_reporting", "High"));
                newsSource.setCountry(details.optString("country", "US"));
                newsSource.setCountryFreedomRank(details.optString("MBFC_ranking", "Mostly Free"));
                newsSource.setMediaType(details.optString("media_type", "News Website"));
                newsSource.setTrafficPopularity(details.optString("traffic_popularity", "Medium Traffic"));
                newsSource.setCredibilityRating(details.optString("credibility", "Medium Credibility"));
                newsSource.setLogo(details.optString("logo", null));

                newsSourcesRepository.save(newsSource);
            }
        }
    }

    public NewsSource getSourceByDomain(String domain) {
        return newsSourcesRepository.findByDomain(domain);
    }

    public NewsSource getSourceById(UUID id) {
        return newsSourcesRepository.findById(id).orElse(null);
    }
}