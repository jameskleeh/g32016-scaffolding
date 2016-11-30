//= wrapped

angular
    .module("bookstore.author")
    .controller("AuthorCreateController", AuthorCreateController);

function AuthorCreateController(Author, $state) {

    var vm = this;
    
    vm.author = new Author();
    
    vm.saveAuthor = function() {
        vm.errors = undefined;
        vm.author.$save({}, function() {
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
