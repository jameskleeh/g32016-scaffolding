//= wrapped
//= require /angular/angular-resource

angular
    .module("bookstore.author")
    .factory("Author", Author);

function Author($resource) {
    var Author = $resource(
        "authors/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Author.list = Author.query;

    Author.prototype.toString = function() {
        return 'bookstore.Author : ' + (this.id ? this.id : '(unsaved)');
    };

    return Author;
}
