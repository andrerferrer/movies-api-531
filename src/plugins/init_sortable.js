// 1. import the plugin
import Sortable from 'sortablejs';

// 2. create a function (with the name of the file) with the plugin behavior
const initSortable = () => {
  const element = document.getElementById('results');
  Sortable.create(element, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

// 3. export the function
export { initSortable };







//         index
//           /\
// components  plugins
// /                 \
// get_api           init_sortable