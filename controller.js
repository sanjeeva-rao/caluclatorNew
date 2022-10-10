angular.module("myapp",[]).controller("mycontroller",function($scope){
    $scope.buttons=[
        [{button:7,value:7},{button:8,value:8},{button:9,value:9},{button:"÷",value:12}],
        [{button:4,value:4},{button:5,value:4},{button:6,value:6},{button:"x",value:11}],
        [{button:1,value:1},{button:2,value:2},{button:3,value:3},{button:"-",value:14}],
        [{button:0,value:0},{button:".",value:"."},{button:"+",value:13},{button:"^"}],
        
    ]
    $scope.res=""
    $scope.goto=function(x,y){
        
            $scope.res+=$scope.buttons[x][y].button       
    }
    $scope.clear=function(){
        $scope.res="";
    }
    
    $scope.caluclate=function(){
        console.log("res=",$scope.res);
        let i,j,newop="",totalarray=[];
        for(i=0;i<$scope.res.length;i++){
            
           
            if($scope.res[i]=='x'|$scope.res[i]=='÷'){

                
                totalarray.push(newop);
                newop='';
                totalarray.push(
                    {symbol:$scope.res[i],id:2});
                
                
                
            }
            else if($scope.res[i]=='+'|$scope.res[i]=='-'){
                
                totalarray.push(newop);
                newop='';
                totalarray.push(
                    {symbol:$scope.res[i],id:1});
                
                
                
                
            }
            else  if(i<$scope.res.length){
                newop+=$scope.res[i]
                if($scope.res.length == i+1){
                    totalarray.push(newop);
                }
            }
            
            
            
        }
        console.log(totalarray);
        let symarray=[totalarray[1]],oparray=[parseFloat(totalarray[0]),parseFloat(totalarray[2])];
        
        if(totalarray.length<4){
            if(totalarray[1].symbol=='+'){
                totalarray[0]=parseFloat(totalarray[0])+parseFloat(totalarray[2]);

            }
            else if(totalarray[1].symbol=='-'){
                totalarray[0]=parseFloat(totalarray[0])-parseFloat(totalarray[2]);

            }
            else if(totalarray[1].symbol=='x'){
                totalarray[0]=parseFloat(totalarray[0])*parseFloat(totalarray[2]);

            }
            else if(totalarray[1].symbol=='÷'){
                totalarray[0]=parseFloat(totalarray[0])/parseFloat(totalarray[2]);

            }
            console.log("result=",totalarray[0]);
            $scope.res=totalarray[0];
        }
        else{
            function finderror(){
                
                if(symarray.length==0){
                    symarray.push(totalarray[i]);
                }
                else if(totalarray[i].id>=symarray[symarray.length-1].id){
                    symarray.push(totalarray[i]);
                }
                else{
                    if(symarray[symarray.length-1].symbol=='x'){
                        oparray[oparray.length-2]=oparray[oparray.length-2]*oparray[oparray.length-1];
                        oparray.pop();
                        symarray.pop();
                        symarray.push(totalarray[i]);

                    }
                    else{
                        oparray[oparray.length-2]=oparray[oparray.length-1]/oparray[oparray.length-2];
                        oparray.pop();
                        symarray.pop();
                        symarray.push(totalarray[i]);
                    }
                    
                }
            }

        
        for(i=3;i<totalarray.length;i++){
            if(i%2!==0){
                if(totalarray[i].id>=totalarray[i-2].id){
                    symarray.push(totalarray[i]);
                    
                }
                else{
                    if(totalarray[i-2].symbol=='+'){
                        oparray.pop();
                        oparray.pop();
                        oparray.push(parseFloat(totalarray[i-1])+parseFloat(totalarray[i-3]));
                        symarray.pop();
                        finderror();
                        
                       
                        
                        
                       
                        
                        
                        
                        
                    }
                    else if(totalarray[i-2].symbol=='-'){
                        oparray.pop();
                        oparray.pop();
                        oparray.push(parseFloat(totalarray[i-1])-parseFloat(totalarray[i-3]));
                        symarray.pop();
                        finderror();
    
                        

                       
                        
                        
                        
                    }
                    else if(totalarray[i-2].symbol=='x'){
                        oparray.pop();
                        oparray.pop();
                        oparray.push(parseFloat(totalarray[i-1])*parseFloat(totalarray[i-3]));
                        
                        symarray.pop();
                        finderror();
                        //symarray.push(totalarray[i]);
                        /////////////////////////////////////////////////////
                        
                       
                        
                        
                        
                        
                    }
                    else if(totalarray[i-2].symbol=='÷'){
                        oparray.pop();
                        oparray.pop();
                        oparray.push(parseFloat(totalarray[i-3])/parseFloat(totalarray[i-1]));
                        symarray.pop();
                        finderror();
                        //symarray.push(totalarray[i]);

                       


                            
                            
                        }
                        
                        
                    }
                }
                else{
                    oparray.push(parseFloat(totalarray[i]));
    
                    
                }
            }
            


        }
        console.log("oparray=",oparray);
        console.log("symarray=",symarray);
        result();

        function mulerror(){
            if(symarray[symarray.length-1].id==2){
                if(symarray[symarray.length-1].symbol=='x'){
                    oparray[oparray.length-2]=oparray[oparray.length-1]*oparray[oparray.length-2];
                    oparray.pop();
                    symarray.pop();
                }
                else if(symarray[symarray.length-1].symbol=='÷'){
                    oparray[oparray.length-2]=oparray[oparray.length-2]/oparray[oparray.length-1];
                    oparray.pop();
                    symarray.pop();
                }
            result()

        }
        
        

        }
        function result(){
            if(symarray.length==0){
                console.log("ans",oparray);
                $scope.res=oparray[0];
                console.log("success")
            }
            
           else if(symarray[symarray.length-1].id==1){
                symarray.forEach(function(i){
                    console.log("sanju");
                    if(i.symbol=='+'){
                        oparray[0]=oparray[0]+oparray[1];
                        oparray.splice(1,1);
                    }
                    else if(i.symbol=='-'){
                        oparray[0]=oparray[0]-oparray[1];
                        oparray.splice(1,1);
                    }
                    else if(i.symbol=='x'){
                        oparray[0]=oparray[0]*oparray[1];
                        oparray.splice(1,1);
                    }
                    else if(i.symbol=='÷'){
                        oparray[0]=oparray[0]/oparray[1];
                        oparray.splice(1,1);
                    }
                })
                
                if(oparray.length!==1){
                    result();
                }
                else{
                    console.log("ans",oparray);
                    $scope.res=oparray[0];

                }
    
            }
            else{
                mulerror();
    
            }

        }
        
        
    
            
        
        
            

        
        
        

    }}
 
)