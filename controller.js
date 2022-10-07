angular.module("myapp",[]).controller("mycontroller",function($scope){
    $scope.buttons=[
        [{button:7,value:7},{button:8,value:8},{button:9,value:9},{button:"÷",value:12}],
        [{button:4,value:4},{button:5,value:4},{button:6,value:6},{button:"x",value:11}],
        [{button:1,value:1},{button:2,value:2},{button:3,value:3},{button:"-",value:14}],
        [{button:0,value:0},{button:".",value:"."},{button:"+",value:13},{button:"="}],
        
    ]
    $scope.res=""
    $scope.goto=function(x,y){
        
            $scope.res+=$scope.buttons[x][y].button       
    }
    $scope.clear=function(){
        $scope.res="";
    }
    $scope.caluclate=function(){
        let i,j,indexarray=[],symarray=[],oparray=[],newop="",totalarray=[];
        for(i=0;i<$scope.res.length;i++){
            
           
            if($scope.res[i]=='x'|$scope.res[i]=='-'|$scope.res[i]=='÷'|$scope.res[i]=='+'){
                
                
                totalarray.push(newop)
                newop='';
                totalarray.push($scope.res[i]);
                console.log(totalarray);
                
                
            }
            
            else if (i<$scope.res.length){
                newop+=$scope.res[i]
                if($scope.res.length == i+1){
                    totalarray.push($scope.res[i]);
                }
            }
            
            
            
        }
    }
        
})