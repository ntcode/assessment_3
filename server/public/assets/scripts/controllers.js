myApp.controller("AddController", ["$scope", "$http", "HeroService", function($scope, $http, HeroService){
  $scope.heroes = {};
  $scope.data = [];

  $scope.addHero = function(data){
    console.log("in controllers add hero", data);
    var postObject = {};
    postObject.Alias = data.Alias;
    postObject.Firstname = data.Firstname;
    postObject.Lastname = data.Lastname;
    postObject.City = data.City;
    postObject.Powername = data.Powername;

    HeroService.postHero(postObject);
  };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
  console.log("in ShowController");

  $scope.deleteHero = function(heroId){
    console.log("fixing to nuke", heroId);
    var nukeId = {"heroId": heroId};
    HeroService.nukeHero(nukeId);
  };

  HeroService.getHeroes();
  $scope.data = HeroService.data;
}]);
