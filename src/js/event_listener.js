//calls to event_listener functions need to be called from index's
//  main function that waits for the dom to load.

////////////////////////////////////////////////////////////////////////////////sort buttons
function addEventListenerToSortButtons(){
  document.querySelector('#sortHigh').addEventListener("click",function(e){
    sortItemsByPrice("high")
  })
  document.querySelector('#sortLow').addEventListener("click",function(e){
    sortItemsByPrice("low")
  })
}
