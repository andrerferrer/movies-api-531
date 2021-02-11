// NOTES ABOUT THE LECTURE //
// This is the Pattern
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// const sum = (x, y) => {
//   return x + y;
// };

// const sum = (x, y) => x + y;

//////////////////
// END OF NOTES //
//////////////////

































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

// we want to get the api only when the form is submitted

// select the element (form)
const form = document.querySelector('form');

// listen when the form gets submitted
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(form)
  const input = form.querySelector('#keyword');
  const movieQuery = input.value;
  
  // clear the list
  const list = document.querySelector('#results');
  list.innerHTML = '';

  // getApi with the movie name and update the list
  getApi(movieQuery);
});
