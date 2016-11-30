//= wrapped

angular
    .module("bookstore.author")
    .controller("AuthorShowController", AuthorShowController);

function AuthorShowController(Author, $stateParams, $state) {
    var vm = this;

    Author.get({id: $stateParams.id}, function(data) {
        vm.author = new Author(data);
    }, function() {
        $state.go('author.list');
    });

    vm.delete = function() {
        vm.author.$delete(function() {
            $state.go('author.list');
        }, function() {
            //on error
        });
    };

}
