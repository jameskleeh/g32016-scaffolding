//= wrapped
//= require /angular/angular-resource

angular
    .module("bookstore.book")
    .factory("Book", Book);

function Book($resource, domainListConversion, domainConversion) {
    var Book = $resource(
        "books/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Author", "author", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Author", "author")]}}
    );

    Book.list = Book.query;

    Book.prototype.toString = function() {
        return 'bookstore.Book : ' + (this.id ? this.id : '(unsaved)');
    };

    return Book;
}
