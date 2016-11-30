//= wrapped

angular
    .module("bookstore.author")
    .controller("AuthorEditController", AuthorEditController);

function AuthorEditController(Author, $stateParams, $state) {
    var vm = this;

    

    Author.get({id: $stateParams.id}, function(data) {
        vm.author = new Author(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve author with ID " + $stateParams.id}];
    });

    vm.updateAuthor = function() {
        vm.errors = undefined;
        vm.author.$update(function() {
            $state.go('author.show', {id: vm.author.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
