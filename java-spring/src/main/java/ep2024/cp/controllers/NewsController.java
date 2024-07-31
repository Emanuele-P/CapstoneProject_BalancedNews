package ep2024.cp.controllers;

import ep2024.cp.services.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

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
}
