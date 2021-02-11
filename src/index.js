// SRP - entry file - organize everything - LIKE a controller

// 1. Import the functions
import { submitHandlerGetApi, getApi } from './components/get_movies_api'
import { initSortable } from './plugins/init_sortable'

// 2. find the Elements
const form = document.querySelector('form');

// 3. Add event listeners and call the functions
form.addEventListener('submit', submitHandlerGetApi);

// right away when we start the app
getApi('harry potter');
initSortable();
