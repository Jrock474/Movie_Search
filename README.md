<h1>Movie Search</h1>

<p>
Movie Search is a responsive React application that allows users to search for movies and retrieve information through the OMDb API.
</p>

<p>
Users can search for a movie by title, browse matching results, and select a movie to view additional information including its plot, director, runtime, genre, release date, and IMDb rating.
</p>

<p>
<a href="https://movie-search-jrock474.vercel.app/">View Live Application</a>
</p>

<h2>Purpose</h2>

<p>
Movie Search was created as a hands-on React project focused on working with external APIs, asynchronous JavaScript, state management, conditional rendering, and reusable user interfaces.
</p>

<p>
The project gave me experience retrieving data from an API based on user input and dynamically updating the interface as application state changes.
</p>

<p>
It also allowed me to practice creating a responsive application that provides additional information without requiring users to navigate away from the search results.
</p>

<h2>Technologies</h2>

<p>React</p>
<p>JavaScript</p>
<p>HTML5</p>
<p>CSS3</p>
<p>Vite</p>
<p>OMDb API</p>
<p>Vercel</p>

<h2>API</h2>

<p>
Movie data is retrieved using the OMDb API.
</p>

<p>
OMDb provides movie information including titles, posters, release years, plots, directors, runtime, genres, ratings, and additional metadata.
</p>

<p>
API Documentation: https://www.omdbapi.com/
</p>

<h2>Functionality</h2>

<h3>Movie Search</h3>

<p>
Users can enter a movie title into the search field and submit a request to the OMDb API.
</p>

<p>
The returned movies are dynamically rendered as a list containing the movie poster, title, and release year.
</p>

<h3>Default Results</h3>

<p>
When the application initially loads, a default search for Batman movies is performed so users are immediately presented with movie results.
</p>

<h3>Movie Details</h3>

<p>
Each search result includes a <b>More Details</b> button.
</p>

<p>
Selecting a movie performs an additional API request using the movie's IMDb ID and retrieves more detailed information about the selected movie.
</p>

<p>The detailed view displays:</p>

<p>Movie Poster</p>
<p>Title</p>
<p>Release Date</p>
<p>Plot Summary</p>
<p>Director</p>
<p>Runtime</p>
<p>IMDb Rating</p>
<p>Genre</p>
<p>Content Rating</p>

<h3>Lightbox</h3>

<p>
Movie details are displayed inside a custom lightbox interface that appears over the existing search results.
</p>

<p>
The lightbox can be closed using the collapse button or by selecting the area surrounding the movie information.
</p>

<h3>Error Handling</h3>

<p>
If the OMDb API does not return any matching movies, the application displays a <b>No results found</b> message instead of attempting to render an empty result.
</p>

<h3>Responsive Design</h3>

<p>
The interface was designed to adapt across different screen sizes, allowing movie results and detailed information to remain accessible on desktop and mobile devices.
</p>

<h2>React Concepts</h2>

<p>
This project uses React state to manage movie results, search input, error messages, selected movie information, and the visibility of the movie detail lightbox.
</p>

<p>
The application also uses the <b>useEffect</b> hook to retrieve the initial movie results when the component first renders.
</p>

<p>
Asynchronous API requests are handled using the Fetch API and async/await.
</p>

<h2>Development</h2>

<p>
Fork the repository using the <b>Fork</b> button at the top of the GitHub repository page.
</p>

<p>
<a href="https://github.com/Jrock474/Movie_Search">Fork Movie Search on GitHub</a>
</p>

<p>
After opening your fork locally, install the required dependencies:
</p>

```bash id="f2m9rx"
npm install
```

<p>
Start the Vite development server:
</p>

```bash id="n7vk3p"
npm run dev
```

<p>
Vite will provide a local development URL where the application can be viewed in the browser.
</p>

<h2>Available Scripts</h2>

<p>Start the development server:</p>

```bash id="cq5v8b"
npm run dev
```

<p>Create a production build:</p>

```bash id="jx8p2d"
npm run build
```

<p>Run ESLint:</p>

```bash id="wt4k6m"
npm run lint
```

<p>Preview the production build locally:</p>

```bash id="hs9d3q"
npm run preview
```

<h2>OMDb API Setup</h2>

<p>
The application requires an OMDb API key to retrieve movie information.
</p>

<p>
You can request an API key from:
</p>

<p>
https://www.omdbapi.com/apikey.aspx
</p>

<p>
When creating your own fork of the application, use your own OMDb API key for API requests.
</p>

<h2>What I Learned</h2>

<p>
Movie Search gave me additional experience building a React application around data retrieved from an external API.
</p>

<p>
Through this project, I practiced React state management, React hooks, asynchronous API requests, conditional rendering, mapping API responses into components, handling user input, and displaying API errors.
</p>

<p>
I also gained experience making multiple related API requests by first searching for movies and then using the selected movie's IMDb ID to retrieve its complete details.
</p>

<h2>Links</h2>

<p>GitHub: https://github.com/Jrock474/Movie_Search</p>

<p>Live Application: https://movie-search-jrock474.vercel.app/</p>

<p>OMDb API: https://www.omdbapi.com/</p>

