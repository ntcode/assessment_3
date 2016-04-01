myApp.factory("HeroService", ["$http", function($http){
  var data = {};

  var postHero = function(data){
    $http.post("/hero", data).then(function(response){
      console.log("hero saved", response);
      getHeroes();
    });
  };

  var getHeroes = function(){
    $http.get("/hero").then(function(response){
      console.log("get heroes", response.data);
      data.response = response.data;
    });
  };

  var nukeHero = function(heroId){
    console.log("in factory", heroID.heroId);
    $http.delete("/hero/" + heroID.heroId).then(function(response){

    getHeroes();
    });
  };

  return{
    nukeHero : nukeHero,
    postHero : postHero,
    getheroes : getHeroes,
    data : data
  };
}]);
