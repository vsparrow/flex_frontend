//calls to event_listener functions need to be called from index's
//  main function that waits for the dom to load.

////////////////////////////////////////////////////////////////////////////////addEventListenerFrontPageItems
function addEventListenerFrontPageItems(){
  let fp = document.querySelector("#main")
  fp.addEventListener("click",function(e){
    let id = e.target.getAttribute("data-fp-grid-item")
    if(id){displayItem(id)}
  })
}//addEventListenerFrontPageItems

////////////////////////////////////////////////////////////////////////////////addEventListenerNavContainer
function addEventListenerNavContainer(){
  // let nc = document.querySelector(".navbar .container")
  let nc = document.querySelector(".nav-links")
  nc.addEventListener("click",function(e){
    navWasClicked(e.target.innerText, e.target.getAttribute("data-button"))
  })
}

////////////////////////////////////////////////////////////////////////////////addEventListenerSiteTitle
function addEventListenerSiteTitle(){
 document.querySelector("#site-title").addEventListener("click",function(){
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
