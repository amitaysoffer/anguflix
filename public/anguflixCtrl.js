
app.factory('dataFactory', function(){
    var allMovies = 
    [
        {price: 10, img:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",title:"Tarzan", year:1999, descrShort:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."},
        {price: 20, img:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",title:"The Lion King", year:1994, descrShort:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."},
        {price: 30, img:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",title:"Beauty and the Beast", year:1991, descrShort:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."},
        {price: 40, img:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",title:"The Sword in the Stone", year:1963, descrShort:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."},
        {price: 50, img:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",title: "Beauty and the Beast", year: 2016, descrShort:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."}
]
    var userMovies = [];
    var budget = {number : 9}
    var addMovie = function(movie){
        userMovies.push(movie);
        budget.number = budget.number - 3
}
    var amount = ""
    var addBudget = function(){
        budget.number += amount
    }
     var removeMovie = function(){
     userMovies.splice(this.$parent.$index, 1);
     budget.number = budget.number + 3
     }
        return {
            addMovie : addMovie,
            allMovies : allMovies,
            userMovies : userMovies,
            removeMovie : removeMovie,
            budget : budget,
            amount : amount,
            addBudget : addBudget
         
        };
})

app.controller('angulflixCtrl', function($scope, dataFactory){
    // add to user collection    
    $scope.clickMovie = dataFactory.addMovie    
    // all movies
    $scope.movies = dataFactory.allMovies
    // user collection movies
    $scope.userMovies = dataFactory.userMovies
    // trashcan to check mark user collection + remove button added
    $scope.changeBin = false;
    $scope.removeButton = "Remove";
    $scope.binFun = function(){
        $scope.changeBin = !$scope.changeBin 
    }
    // remove movie from user collection
    $scope.removeMovie = dataFactory.removeMovie
    // Select movies from below to add to your collection
    $scope.condition = function(){
        $scope.topicSelect = "Select movies from below to add to your collection"            
        if(dataFactory.userMovies.length > 0){
            return false;
        } else {
            return true;
        }               
    }
    $scope.names = ["Emil", "Tobias", "Linus"];
    // budget
    $scope.budget = dataFactory.budget
    $scope.addMovie = function(movie){
        if ($scope.budget.number < 3){
            alert('no money')
        }
        else{
        $scope.clickMovie(movie);
        }
    }
})

