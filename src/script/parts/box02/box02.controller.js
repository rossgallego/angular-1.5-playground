module.exports  = function ($scope,$http,znotesService) {

    $scope.clark = {alias: "superman", power: "fly"};
    $scope.bruce = {alias: "batman", power: "echo"};
    $scope.peter = {alias:" spiderman", power: "senses"};

    $scope.logan = {alias: "wolverine", power: "claw"};

    $scope.power = function(){
    	alert("claw!!!");
    }

    $scope.cyclops = {alias: "nnn", power: "laser"};

    $scope.superdata = znotesService.getZnotes();
    
};