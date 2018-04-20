
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
  searchElement.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
      //enter was pressed, call function
      // console.log("enter was pressed");
      searchItems()
    }
    //else do nothing
    // console.log("keydown in search");
  })
  // load items that were found
  // if nothing found display nothing found

}//addEventListenerSearch

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
  displaySearchItems(resultsArr)
}
/////////
function displaySearchItems(results){
  // if no results, display some message
  // else display each item
  console.log(results);
  let main = document.querySelector("#main")
  main.innerHTML = ""
  if (results.length == 0){
    // show something that says nothing found on screen
    main.innerHTML = "Nothing found"
  }
  else {
    //display results
    displayItems("all",results) //display all items in results
    // results.forEach(function(item){
    // })
  }//else
}//displaySearchItems
