const submitHandlerGetApi = (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('#keyword');
  const movieQuery = input.value;
  
  const list = document.querySelector('#results');
  list.innerHTML = '';

  getApi(movieQuery);
}

const getApi = (movieQuery) => {
  const url = `http://www.omdbapi.com/?s=${movieQuery}&apikey=adeb456d`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // const movies = data['Search'];
      const movies = data.Search;
      // go through each movie
      movies.forEach((movie) => {
        const title = movie.Title;
        const posterUrl = movie.Poster;
        const year = movie.Year;
    
        // create an HTML element
        const htmlElement = `
          <li class="list-inline-item">
            <p>${title} - ${year}</p>
            <img src="${posterUrl}" alt="">
          </li>   
        `;
        // insert this element to the DOM
        const list = document.querySelector('#results');
        list.insertAdjacentHTML('beforeend', htmlElement);
      });
    });
};

// syntax for exporting
export { submitHandlerGetApi, getApi };
