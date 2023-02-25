
// global variables

let configApiUrl = "https://api.spoonacular.com/recipes/complexSearch?";
let totalData = [];
let inputText;
let resultDiv = document.getElementById("results-div");

//search() function

function search(){
  //alert("hi");
  if(document.getElementById("txtSearch").value !== ""){
   inputText = document.getElementById("txtSearch").value;
   //alert(inputText);
   let APIKey = "apiKey=d8fcc6dcc74b413ab0c7e92c24a6f469";
   let fetchURL = configApiUrl + APIKey + "&query=" + inputText;
//alert(fetchURL);
   fetch(fetchURL)
   .then(function(response){
     return response.json();
   })
   .then(function(data){
     console.log(data);
     if(data.results.length > 0) {
       totalData = data.results;
       //resultDiv.innerHTML = JSON.stringify(totalData);

        buildDOM();
        /*
      for(let i = 0; i <totalData.length; i++){
        resultDiv.innerHTML+= JSON.stringify(totalData[i].title) + "<br>";
      } //end of for
      */
     }//end of if
   })//end of then
  }//end of if
  else{
    resultDiv.innerHTML = "Sorry no such FOOD!";
  }// end of else
}//end of function search()

function buildDOM(){
  resultDiv.innerHTML = "";
  for(let i = 0; i < totalData.length; i++){
    //alert(totalData)
    let img = document.createElement("img");
    let div = document.createElement('div');
    div.setAttribute("class", "col-sm-3");
  div.innerHTML += '<img class="img-fluid" src="'+totalData[i].image+'">'
    //alert(totalData[i].title)
  //div.innerHTML += '<h3>' + totalData[i].title +'</h3>';
  div.innerHTML += '<h3><a href="javascript:void(0);" onclick="goToSourceURL('+totalData[i].id +')">' + totalData[i].title + '</a></h3>'
   resultDiv.appendChild(div);
  }
}

function goToSourceURL(id){
  //alert(id);
  let recipeURL = "https://api.spoonacular.com/recipes/" + id + '/information?apiKey=d8fcc6dcc74b413ab0c7e92c24a6f469'
  //alert(recipeURL);
  fetch(recipeURL)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    window.open(data.sourceUrl, "_blank")
  })
}
// JavaScript code for search results page
const PAGE_SIZE = 5; // number of search results to show per page
let currentPage = 1; // current page number
let currentCuisine = ''; // current cuisine filter

// sample data for search results
const searchResults = [
  { name: 'Spaghetti Carbonara', cuisine: 'italian' },
  { name: 'Enchiladas', cuisine: 'mexican' },
  { name: 'Chicken Tikka Masala', cuisine: 'indian' },
  { name: 'Pizza Margherita', cuisine: 'italian' },
  { name: 'Taco Salad', cuisine: 'mexican' },
  { name: 'Samosas', cuisine: 'indian' },
  { name: 'Lasagna', cuisine: 'italian' },
  { name: 'Tamales', cuisine: 'mexican' },
  { name: 'Palak Paneer', cuisine: 'indian' },
  { name: 'Fettuccine Alfredo', cuisine: 'italian' },
  { name: 'Chiles Rellenos', cuisine: 'mexican' },
  { name: 'Biryani', cuisine: 'indian' },
  { name: 'Pesto Pasta', cuisine: 'italian' },
  { name: 'Chimichangas', cuisine: 'mexican' },
  { name: 'Butter Chicken', cuisine: 'indian' }
  // add more search results as needed
];

// function to display search results
function displayResults(results) {
  const resultList = document.getElementById('results-list');
  resultList.innerHTML = ''; // clear previous search results

  // iterate through search results and create HTML elements for each item
  results.forEach((item, index) => {
    // check if item matches current cuisine filter
    if (currentCuisine === '' || item.cuisine === currentCuisine) {
      // check if item should be shown on current page
      if (index >= (currentPage - 1) * PAGE_SIZE && index < currentPage * PAGE_SIZE) {
        const li = document.createElement('li');
        li.innerText = item.name;
        resultList.appendChild(li);
      }
    }
  });
}

$(".search-btn").click(function () {
  $(".header-img").css("display","none")
  $("#imgraw").css("display","block")
  // $("#").show();   
});