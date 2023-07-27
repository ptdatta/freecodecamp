/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

const {getLibrary, createBook, deleteLibrary, getOneBook, createComment, deleteOneBook} = require('../controllers/library');

module.exports = function (app) {

  app.route('/api/books')
    .get(getLibrary)
    .post(createBook)
    .delete(deleteLibrary);



  app.route('/api/books/:id')
    .get(getOneBook)
    .post(createComment)
    .delete(deleteOneBook);
  
};
