//= wrapped
//= require /angular/angular
//= require /bookstore/core/bookstore.core
//= require /bookstore/index/bookstore.index
//= require /bookstore/book/bookstore.book
//= require /bookstore/author/bookstore.author

angular.module("bookstore", [
    "bookstore.core",
    "bookstore.index",
    "bookstore.book",
    "bookstore.author"
]);
