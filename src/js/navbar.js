// /////////////////////////////////////////////////////////////////////////////display?.js

function navShowDefault(){
  let buttons = document.querySelector(".nav-pills")
  let buttonhtml = ""
  buttonhtml = `
  <li role="presentation" class="active" ><a href="#" data-button="default">Home</a></li>
  <li role="presentation" class="active" ><a href="#" data-button="default">Profile</a></li>
  <li role="presentation" class="active" ><a href="#" data-button="default">Categories</a></li>
  <li role="presentation" class="active" ><a href="#" data-button="default">Items</a></li>`
  buttons.innerHTML = buttonhtml
}
// /////////////////////////////////////////////////////////////////////////////display?.js

function  navShowCategories(){
  console.log("HI navShowCategories");
  let buttons = document.querySelector(".nav-pills")
  console.log(buttons.innerHTML)
  let buttonhtml = ""
  CategoryAll.forEach(function(category){
    buttonhtml += `<li role="presentation" class="active" ><a href="#" data-button="category">${category.name}</a></li>`
  })
  buttons.innerHTML = ""
  buttons.innerHTML = buttonhtml
}
/////////////////////////////////////////////////////////////////////////////   addEventListener.js
/////////////////////////////////////////////////////////////////////////////
function navWasClicked(text, dataAttribute){
  text=text.toLowerCase()
  console.log(text);

  if(dataAttribute == "default"){
    switch(text){
      case "categories":
      navShowCategories();
      break;
      default:
        //do nothing
        // console.log("NOTHING WILL HAPPEN");
    }//end switch
  } //end if dataAttribute == default
  else if (dataAttribute == "category") {
    //add switch here or do something to display all items from a category
    // showItemsInCategory(text)
    displayItems(text)
  } //end if dataAttribute == category
}//navWasClicked
