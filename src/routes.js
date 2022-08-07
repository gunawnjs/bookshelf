const {
  addBookHandler,
  getBookHandler,
  getBookIdHandler,
  editBookIdHandler,
  deleteBookIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookIdHandler,
  },
];

module.exports = routes;
