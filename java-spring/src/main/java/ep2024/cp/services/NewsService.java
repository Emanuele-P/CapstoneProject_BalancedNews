package ep2024.cp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;

@Service
public class NewsService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${worldnews.key}")
    private String apiKey;
    @Value("${worldnews.key2}")
    private String apiKey2;
    @Value("${worldnews.key3}")
    private String apiKey3;

    public String getTopNews() {
        String date = String.valueOf(LocalDate.now().minusDays(1));
        String url = "https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=" + date;

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey);

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);

        return response.getBody();

    }

    public String getTrendingNews(String query) {
        String url = "https://api.worldnewsapi.com/search-news?text=" + query + "&language=en&number=30";

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey3);

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);

        return response.getBody();
    }

    public String getCategories(String query) {
        String url = "https://api.worldnewsapi.com/search-news?categories=" + query + "&language=en&number=20";

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey2);

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);

        return response.getBody();
    }
}
