package ep2024.cp.config;

import ep2024.cp.services.NewsSourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private NewsSourcesService newsSourcesService;

    @Override
    public void run(String... args) throws Exception {
        Path jsonPath = new ClassPathResource("news_sources.json").getFile().toPath();
        String jsonString = new String(Files.readAllBytes(jsonPath));
        newsSourcesService.saveFromJson(jsonString);
    }
}
