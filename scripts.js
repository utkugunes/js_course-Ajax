
function getCountries(){
   $.ajax({
    url : "https://restcountries.com/v3.1/all",
    type: "GET",
    dataType: "json",
    success: function(data){
        getCountryName(data);
        
    },
    error: function(){
        console.log("Error in the request");
    }  
}); 
}

getCountries();

function getCountryName(countryName){
    for(var i=0; i<countryName.length; i++){
        //console.log(countryName[i].name.common);
        $("#countries").val(countryName[i].name.common);
    }
    
}

//console.log($("#countries").val()); 

