var searchTerm = document.getElementById("searchTerm");
var searchBtn = document.getElementById("searchBtn");
var searchResults = document.getElementById("searchResults");
var remove = document.getElementById("remove");

searchBtn.addEventListener("click",function(){   
  if(searchTerm.value == ""){
  alert("Enter a search term.");
}
  else{
  $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+searchTerm.value+"&origin=*",function(data){  

     $.each(data.query.pages, function(key,val){
 var result = document.createElement("a");
 result.innerHTML = "<strong>"+val.title+"</strong>" + "<br>" + val.extract + "<br><br>";
   result.href = "https://en.wikipedia.org/?curid=" + key;  
    result.target = "_blank";   
  searchResults.appendChild(result);     
     });
   searchResults.classList.remove("d-none");
   remove.classList.remove("d-none"); 
   searchBtn.classList.add("d-none"); 
  });
  }
});

remove.addEventListener("click",function(){
  searchResults.classList.add("d-none");
  searchResults.innerHTML = "";
  remove.classList.add("d-none");
  searchBtn.classList.remove("d-none");
  searchTerm.value="";
})
