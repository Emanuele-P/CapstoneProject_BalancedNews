# **News Aggregator and Sentiment Analysis Platform**

## **Project Overview**

This project is a full-stack web application designed to be a comprehensive news aggregator, allowing users to compare articles from various sources for a single news topic. The platform's primary goal is to foster a more balanced view of current events by presenting articles from diverse political perspectives.

### **Key Features**

- **News Comparison**: Users can compare headlines and summaries from multiple sources for each news topic. Each source is tagged with information about its political leaning, providing a clear visual representation of the percentage of left, right, and center perspectives.
  
- **Blindspot Analysis**: The homepage features a blindspot section that highlights the most significant news story of the day that has a noticeable absence of coverage from either the left or the right, offering insights into potential media biases.

- **Trending Section**: The trending page displays popular topics with a sentiment bar, illustrating the effect of specific news on social media interactions. This allows users to gauge partial public opinion as positive or negative.

- **User Authentication**: Users can register, log in, and manage their profiles, including updating information and choosing to log out or delete their account.

- **Dark Mode**: A dark mode option is available, enhancing the user experience in low-light environments.

### **Technology Stack**

- **Frontend**: React (Vite)
- **Backend**: Java (Spring Boot)
- **State Management**: Redux
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: SCSS, Bootstrap

### **User Experience (UX) and UI Design**

This project’s interface embraces modern design trends like **Neumorphism** and **Glassmorphism** to create an intuitive, visually appealing experience.

- **Neumorphism**: By blending skeuomorphism and flat design, Neumorphism uses subtle shadows and highlights to give elements a soft, raised appearance. This makes buttons, cards, and input fields feel tactile and engaging.

- **Glassmorphism**: Complementing Neumorphism, Glassmorphism introduces frosted glass effects, semi-transparency, and soft blurs. This adds depth and layering to the interface, enhancing the modern aesthetic while keeping the focus on content.

Together, these design choices result in a clean, user-friendly interface that is both contemporary and functional. The combination of soft edges and transparency effects creates a cohesive, engaging visual environment that supports intuitive interaction and a seamless user experience.


### **APIs and Data Sources**

- **News Data**: [World News API](https://worldnewsapi.com) - Used to fetch news articles and perform sentiment analysis. The sentiment data is AI-powered, tracking social media interactions to assess whether the public opinion on a given news topic is generally positive or negative.
  
- **Source Information**: Media Bias - Source bias information was manually compiled by accessing the Media Bias search bar, converting the data into JSON format, and storing it in a local database.

### **Future Improvements**

- **Mobile and Tablet Optimization**: Currently optimized for desktop, future work will focus on ensuring full responsiveness on smartphones and tablets.

- **Performance Enhancements**: The homepage requires multiple refreshes on the first load due to local storage handling. Improving this will be a priority.

- **API Access and Management**: Expanding API availability and improving backend management of APIs is another focus area, as current solutions involve restricted access and manual handling.

## **Contacts**

**This is my** - [LinkedIn](www.linkedin.com/in/emanuele-pezzato-1232a824a)
