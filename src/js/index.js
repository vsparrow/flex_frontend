
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
    console.log("keydown in search");
  })
  // load items that were found
  // if nothing found display nothing found

}
