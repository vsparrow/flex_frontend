
 document.addEventListener('DOMContentLoaded', function(){
   addEventListenerSiteTitle()
   addEventListenerNavContainer()
   addEventListenerToSortButtons()
   /////////////////////////////////////////////////////////////////////////////fetch
   const urlbase = "http://127.0.0.1:3000/api/v1/"
   let url = urlbase + "categories"
   fetch(url).then(res=>res.json()).then(json=>parseJSONIntoClasses(json))
   /////////////////////////////////////////////////////////////////////////////parseJSONIntoClasses
   function parseJSONIntoClasses(json){
     json.forEach(function(category){
       let newCategory = new Category(category.id,category.name)
       category.items.forEach(function(item){
         let newItem =
          new Item(newCategory,item.id,item.title,item.brand,item.image,item.size,item.price,item.description)
       })//forEach item
     })//forEach category
     displayItems()
   }//parseJSONIntoClasses
   addEventListenerSearch();
 })//document.addEventListener


/////////////////////
function addEventListenerSearch(){
  // add event_listener search input and button
  let searchElement = document.querySelector("#search")
  let searchButton = document.querySelector("#searchButton")

  searchElement.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
      //enter was pressed, call function
      // console.log("enter was pressed");
      searchItems()
    }
    //else do nothing
    // console.log("keydown in search");
  })
  searchButton.addEventListener("click", function(){
    searchItems()
  })

}//addEventListenerSearch
/////////


///////////
function searchItems(){
  searchval = document.querySelector('#search').value
  document.querySelector('#search').value = ""
  console.log(searchval);
  resultsArr = []
  ItemAll.forEach(function(item){
    if (
    (item.title.toLowerCase().indexOf(searchval) >= 0) ||
    (item.brand.toLowerCase().indexOf(searchval) >= 0) ||
    (item.size.toLowerCase().indexOf(searchval) >=0) ||
    (item.description.toLowerCase().indexOf(searchval) >= 0)
    )
    {resultsArr.push(item)}
  })//forEach
  // console.log(resultsArr);
  displaySearchItems(resultsArr,searchval)
}
/////////
function displaySearchItems(results,searchval=""){
  // if no results, display some message
  // else display each item
  console.log(results);
  let main = document.querySelector("#main")
  main.innerHTML = ""
  if (results.length == 0){
    // show something that says nothing found on screen
    // main.innerHTML = "Nothing found"
    main.innerHTML = `<div class="container"><div class="row ">`
    main.innerHTML += `<h1 style="font-size: 5em; text-align: center"><i class="fa fa-exclamation-triangle "></i></h1>`
    main.innerHTML += `<h1 style="font-size: 5em; text-align: center">"${searchval}" Not Found</h1>`
    // main.innerHTML += `<span>  <i class="fas fa-user"></i>
    // </span>`
    main.innerHTML += `</div></div>`


  }
  else {
    //display results
    displayItems("all",results) //display all items in results
    // results.forEach(function(item){
    // })
  }//else
}//displaySearchItems
