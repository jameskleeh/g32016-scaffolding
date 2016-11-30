//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /bookstore/core/bookstore.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("bookstore.author", ["ui.router", "ngResource", "bookstore.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('author', {
            url: "/author",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('author.list', {
            url: "",
            templateUrl: "/bookstore/author/list.html",
            controller: "AuthorListController as vm"
        })
        .state('author.create', {
            url: "/create",
            templateUrl: "/bookstore/author/create.html",
            controller: "AuthorCreateController as vm"
        })
        .state('author.edit', {
            url: "/edit/:id",
            templateUrl: "/bookstore/author/edit.html",
            controller: "AuthorEditController as vm"
        })
        .state('author.show', {
            url: "/show/:id",
            templateUrl: "/bookstore/author/show.html",
            controller: "AuthorShowController as vm"
        });
}
