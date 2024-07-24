package ep2024.cp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NewsService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${worldnews.key}")
    private String apiKey;

    public String getTopNews() {
        String url = "https://api.worldnewsapi.com/top-news?source-country=us&language=en";

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey);

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);

        return response.getBody();

    }
}
