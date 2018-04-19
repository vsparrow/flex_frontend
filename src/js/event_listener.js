//calls to event_listener functions need to be called from index's
//  main function that waits for the dom to load.

////////////////////////////////////////////////////////////////////////////addEventListener to frontpage items
function addEventListenerFrontPageItems(){
  // let fp = document.querySelector(".fp-row-items")
  let fp = document.querySelector("#main")
  fp.addEventListener("click",function(e){
    // console.log("addEventListenerFrontPageItems: Clicked grid item: id below:");
    // console.log(e.target);
    // console.log(e.target.getAttribute("data-fp-grid-item"));
    let id = e.target.getAttribute("data-fp-grid-item")
    if(id){displayItem(id)}
  })
}//addEventListenerFrontPageItems

//////////////////////////////////////////////////////////////////////////////addEventListenerCategories
// function addEventListenerNavCategoryButton(){
//  document.querySelector("#nav-button-category").addEventListener("click",function(){
//    navShowCategories()
//  })
// }
////////////////////////////////////////////////////////////////////////////addEventListener to navbar container items
function addEventListenerNavContainer(){
  let nc = document.querySelector(".navbar .container")
  nc.addEventListener("click",function(e){
    // console.log(e);
    // console.log(e.target.getAttribute("data-button"));
    // console.log(e.target.innerText);
    navWasClicked(e.target.innerText, e.target.getAttribute("data-button"))
  })
}

//////////////////////////////////////////////////////////////////////////////addEventListenerSiteTitle
function addEventListenerSiteTitle(){
 document.querySelector("#site-title").addEventListener("click",function(){
   // console.log("Title clicked");
   displayItems()
 })
}
////////////////////////////////////////////////////////////////////////////////sort buttons
function addEventListenerToSortButtons(){
  document.querySelector('#sortHigh').addEventListener("click",function(e){
    sortItemsByPrice("high")
  })
  document.querySelector('#sortLow').addEventListener("click",function(e){
    sortItemsByPrice("low")
  })
}
