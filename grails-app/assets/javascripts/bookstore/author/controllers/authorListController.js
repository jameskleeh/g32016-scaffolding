//= wrapped

angular
    .module("bookstore.author")
    .controller("AuthorListController", AuthorListController);

function AuthorListController(Author) {
    var vm = this;

    var max = 10, offset = 0;

    Author.list({max: max, offset: offset}, function(data) {
        vm.authorList = data;
    });
}
