//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /bookstore/core/bookstore.core
//= require /bookstore/author/bookstore.author
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("bookstore.book", [
    "ui.router",
    "ngResource",
    "bookstore.core",
    "bookstore.author"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('book', {
            url: "/book",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('book.list', {
            url: "",
            templateUrl: "/bookstore/book/list.html",
            controller: "BookListController as vm"
        })
        .state('book.create', {
            url: "/create",
            templateUrl: "/bookstore/book/create.html",
            controller: "BookCreateController as vm"
        })
        .state('book.edit', {
            url: "/edit/:id",
            templateUrl: "/bookstore/book/edit.html",
            controller: "BookEditController as vm"
        })
        .state('book.show', {
            url: "/show/:id",
            templateUrl: "/bookstore/book/show.html",
            controller: "BookShowController as vm"
        });
}
