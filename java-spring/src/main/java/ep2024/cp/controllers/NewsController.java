package ep2024.cp.controllers;

import ep2024.cp.entities.NewsSource;
import ep2024.cp.exceptions.NotFoundException;
import ep2024.cp.services.NewsService;
import ep2024.cp.services.NewsSourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @Autowired
    private NewsSourcesService newsSourcesService;

    @GetMapping("/top")
    public String getTopNews() {
        return newsService.getTopNews();
    }

    @GetMapping("/trending")
    public String getTrendingNews(@RequestParam String query) {
        return newsService.getTrendingNews(query);
    }

    @GetMapping("/categories")
    public String getCategories(@RequestParam String query) {
        return newsService.getCategories(query);
    }

    @GetMapping("/source/{id}")
    public NewsSource getNewsSourceById(@PathVariable UUID id) {
        NewsSource newsSource = newsSourcesService.getSourceById(id);
        if (newsSource == null) {
            throw new NotFoundException("News source not found.");
        }
        return newsSource;
    }
}
