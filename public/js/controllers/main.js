angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','$rootScope', function($scope, $http,$rootScope) {
		$scope.formData = {};
		$scope.loading = true;
		$rootScope.title="Hey there I am from Angular"
		$rootScope.image = "https://www.askideas.com/wp-content/uploads/2017/06/Free-Online-Photos1.jpg"
		
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
	
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

		
		};
	}]);