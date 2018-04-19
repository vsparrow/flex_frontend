// const CategoryAll = [];
// const ItemAll = []

 document.addEventListener('DOMContentLoaded', function(){
   // console.log("HI");
   addEventListenerSiteTitle()                                                  ////////move to addEventListener.js
   // addEventListenerNavCategoryButton()
   addEventListenerNavContainer()
   addEventListenerToSortButtons()
   /////////////////////////////////////////////////////////////////////////////fetch move to adapter
   const urlbase = "http://127.0.0.1:3000/api/v1/"
   let url = urlbase + "categories"
   // fetch(url).then(res=>res.json()).then(json=>console.log(json))
   fetch(url).then(res=>res.json()).then(json=>parseJSONIntoClasses(json))
   /////////////////////////////////////////////////////////////////////////////class category, move to category.js
   // class Category{
   //   constructor(id,name){
   //    this.id=id;
   //    this.name=name;
   //    this.items = [];
   //    CategoryAll.push(this)
   //   }//constructor
   //   static all(){ return CategoryAll}
   // }//Category
   /////////////////////////////////////////////////////////////////////////////class Item, move to Item.js
   // class Item{
   //   constructor(category,id,title,brand,image,size,price,description){
   //     this.category = category
   //     this.id = id;
   //     this.title = title;
   //     this.brand = brand;
   //     this.image = image;
   //     this.size = size;
   //     this.price = price;
   //     this.description = description
   //     ItemAll.push(this)
   //   }//constructor
   //   static all(){return ItemAll}
   // }//Item

   /////////////////////////////////////////////////////////////////////////////move to category.js ?????
   function parseJSONIntoClasses(json){
     // console.log("THIS IS ALL JSON:");
     // console.log(json);
     json.forEach(function(category){
       let newCategory = new Category(category.id,category.name)
       category.items.forEach(function(item){
         //chose category.id over an instance below because question:
         // is it a pointer to the instance? or a new instance? It is the pointer
         //because CategoryAll[0] === ItemAll[0].category is true
         let newItem = new Item(newCategory,item.id,item.title,item.brand,item.image,item.size,item.price,item.description) //////////////ADD DESCRIPTION BY SENDING IT VIA JSON  THEN ADDD TO HERE
       })//forEach item
     })//forEach category aka category
     // console.log("CategoryAll");
     // console.log(CategoryAll.length)
     // console.log(CategoryAll)
     // console.log("ItemAll");
     // console.log(ItemAll);
     // debugger
     displayItems()
   }


//////////////////**************************************
   // document.querySelector('#sortHigh').addEventListener("click",function(e){
   //   sortItemsByPrice("high")
   // })
   // document.querySelector('#sortLow').addEventListener("click",function(e){
   //   sortItemsByPrice("low")
   // })
//////////////////**************************************
 })//document.addEventListener

 ////////////////////////////////////////////////////////////////////////////displayItem **single
 // function displayItem(id){
 //   //get item with id of id
 //   let item = ItemAll.find(item => item.id == id)
 //   // console.log(item);
 //   //clear main
 //   let main = document.querySelector("#main")
 //   let itemhtml = ""
 //   main.innerHTML = ""
 //   itemhtml += `<div class="container itemContainer"><div class="row">`
 //   let image = "./src/image/defaultflex.jpg"
 //   if (item.image != ""){image = item.image}
 //   itemhtml += `<div class="col-md-6"><img src="${image}" class="img-responsive"></div>`
 //   itemhtml += `<div class="col-md-1"></div>`
 //   itemhtml += `<div class="col-md-4">`
 //   itemhtml +=  `<h3>${item.brand.toUpperCase()}</h3>`
 //   itemhtml +=  `<br><span>${item.title}</span>`
 //   itemhtml +=  `<br><span>SIZE: ${item.size}</span>`
 //   itemhtml +=  `<br><span style="font-size: 1.25em"><strong>$${item.price}</strong></span>`
 //   itemhtml += `<br><br><br><br><br>`
 //   itemhtml += `<p>DESCRIPTION</p>`
 //   itemhtml += `<p style="font-size:.9em">${item.description}</p>`
 //   // itemhtml += `<span></span>`
 //   itemhtml += `</div>` //end col-md-4
 //   // itemhtml += `<div class="col-md-12"><img src="${image}" class=""></div>`
 //   itemhtml += `</div></div>` //close container and row
 //   //display on main
 //   main.innerHTML = itemhtml
 // }
 // /////////////////////////////////////////////////////////////////////////////displayItems
 // function displayItems(category="all"){
 //   // navShowDefault() //reset navbar buttons if changed
 //   navShowCategories() //decided that best to display categories, as the logo would display home and items, and we dont have profile
 //   let displayhtml = ""
 //   // displayhtml += `<div class="container"><div class="row fp-row-items">`
 //   displayhtml += `<div class="container">` //
 //   // if(category = all){}
 //   let count = 0
 //   ItemAll.forEach(function(item){                                           //add itemID and link to item
 //
 //    if(category == "all" || category == item.category.name.toLowerCase()){
 //      if(count==0){displayhtml += `<div class="row fp-row-items">`}
 //       let image = "./src/image/defaultflex.jpg"
 //       if (item.image != ""){image = item.image}
 //       let itemhtml = `<div class="col-md-3" align="center" style="padding-top: 15px; padding-bottom: 15px" data-fp-grid-item="${item.id}">`  //move style to css
 //       itemhtml += `<img src="${image}" class="img-responsive" data-fp-image-item="${item.id}" data-fp-grid-item="${item.id}">`
 //       itemhtml += `<br><strong data-fp-grid-item="${item.id}">${item.brand}</strong>`
 //       //////
 //       let shortTitle= ""
 //       if(item.title){
 //         if (item.title.length > 40){ shortTitle= item.title.substring(0,32)+"..."}  //move to own function?
 //         else {shortTitle= item.title}
 //         itemhtml += `<br><span data-fp-grid-item="${item.id}" style="font-size: .9em">${shortTitle}</span>`
 //       }
 //       //////
 //       itemhtml += `<br><span data-fp-grid-item="${item.id}">$${item.price}</span>`
 //       itemhtml += `</div><!-- END COL-->`
 //       displayhtml += itemhtml
 //       if (count == 3){displayhtml += `<br></div><!-- END ROW-->`}
 //       // console.log("count is :" +count);
 //       ++count;
 //       if (count == 4){ count = 0}
 //     }//end if category == all
 //
 //     })//forEach
 //     displayhtml += `</div><!-- CLOSE CONTAINER -->` //close container and row
 //   document.querySelector('#main').innerHTML = ""
 //   document.querySelector('#main').innerHTML += displayhtml
 //   addEventListenerFrontPageItems()
 // }//display
 //  //////////////////////////////////////////////////////////////////////////////addEventListenerSiteTitle
 // function addEventListenerSiteTitle(){
 //   document.querySelector("#site-title").addEventListener("click",function(){
 //     // console.log("Title clicked");
 //     displayItems()
 //   })
 // }
//  //////////////////////////////////////////////////////////////////////////////addEventListenerCategories
// function addEventListenerNavCategoryButton(){
//   document.querySelector("#nav-button-category").addEventListener("click",function(){
//     navShowCategories()
//   })
// }

 // ////////////////////////////////////////////////////////////////////////////addEventListener to frontpage items
 // function addEventListenerFrontPageItems(){
 //   // let fp = document.querySelector(".fp-row-items")
 //   let fp = document.querySelector("#main")
 //   fp.addEventListener("click",function(e){
 //     // console.log("addEventListenerFrontPageItems: Clicked grid item: id below:");
 //     // console.log(e.target);
 //     // console.log(e.target.getAttribute("data-fp-grid-item"));
 //     let id = e.target.getAttribute("data-fp-grid-item")
 //     if(id){displayItem(id)}
 //   })
 // }//addEventListenerFrontPageItems


// ////////////////////////////////////////////////////////////////////////////addEventListener to navbar container items
// function addEventListenerNavContainer(){
//   let nc = document.querySelector(".navbar .container")
//   nc.addEventListener("click",function(e){
//     // console.log(e);
//     // console.log(e.target.getAttribute("data-button"));
//     // console.log(e.target.innerText);
//     navWasClicked(e.target.innerText, e.target.getAttribute("data-button"))
//   })
// }


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
    showItemsInCategory(text)
  } //end if dataAttribute == category
}//navWasClicked
/////////////////////////////////////////////////////////////////////////////   display
function showItemsInCategory(category){
  console.log("DO THIS --- showItemsInCategory() --- but in a branch for show or items ");
  // debugger
  displayItems(category)
}
/////////////////////////////////////////////////////////////////////////////   display sort high
function sortItemsByPrice(howtosort){
  //get all col from page //add to array?
  // howtosort = "high"
  let allrows = document.querySelectorAll("#main .container .row .col-md-3")
  // console.log(allrows);
  let allrowsarray = Array.from(allrows)
  console.log(allrowsarray);
  console.log(allrowsarray[0].lastChild.innerText); //$1278
  // allrowsarray.forEach(el => console.log(Number(el.lastChild.innerText.split("$").join(" ")) ))
  //sort by price
  let sortedArray = allrowsarray.sort(function(a,b){
    // return Number(a.lastChild.innerText.split("$").join(" ")).localeCompare(Number(b.lastChild.innerText.split("$").join(" ")))
    if(howtosort=="high"){
      return  (Number(b.lastChild.innerText.split("$").join(" "))) -Number(a.lastChild.innerText.split("$").join(" "))
    }
    else {
      return Number(a.lastChild.innerText.split("$").join(" ")) - (Number(b.lastChild.innerText.split("$").join(" ")))
    }
  })
  console.log(sortedArray);
  //redisplay
  redisplay(sortedArray)
}//end sortItemsByPrice

// ////////////////////////////////////////////////////////////////////////////////redisplay()
// //called by sortItemsByPrice()
// function redisplay(arrayOfElements){
//   let mainhtml = document.querySelector("#main .container")
//   displayhtml = ""
//   let count = 0;
//   arrayOfElements.forEach(function(el){
//     if(count==0){displayhtml += `<div class="row fp-row-items">`}
//     displayhtml += el.outerHTML
//     if (count == 3){displayhtml += `<br></div><!-- END ROW-->`}
//     ++count;
//     if (count == 4){ count = 0}
//   })
//   mainhtml.innerHTML = displayhtml
// }

// Working picture upload
// <form action="/action_page.php">
//   <label for="exampleFormControlFile1">Upload a picture</label>
//   <input type="file" name="pic" accept="image/*" class="form-control-file" id="exampleFormControlFile1">
//   <input type="submit">
// </form>
