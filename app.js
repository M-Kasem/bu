var metaInfos = angular.module('metaInfos', []);

metaInfos.controller('UserCtrl', ['$scope', function($scope){
    $scope.names = ['Mohamed', 'Kareem', 'Ahmed'];
    $scope.toggles = [true, true, true];
    $scope.name = 'Anonymous';
    $scope.addName = function(name){
        $scope.names.push(name);
    }
    $scope.updateName = function(index, name){
        $scope.names[index] = name;
        $scope.toggleName(index);
    }
    $scope.toggleName = function(name){
        $scope.toggles[name] = !$scope.toggles[name];
    }
}]);