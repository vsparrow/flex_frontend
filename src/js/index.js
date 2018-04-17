const CategoryAll = [];
const ItemAll = []

 document.addEventListener('DOMContentLoaded', function(){
   console.log("HI");
   /////////////////////////////////////////////////////////////////////////////fetch move to adapter
   const urlbase = "http://127.0.0.1:3000/api/v1/"
   let url = urlbase + "categories"
   // fetch(url).then(res=>res.json()).then(json=>console.log(json))
   fetch(url).then(res=>res.json()).then(json=>parseJSONIntoClasses(json))
   /////////////////////////////////////////////////////////////////////////////class category, move to category.js
   class Category{
     constructor(id,name){
      this.id=id;
      this.name=name;
      this.items = [];
      CategoryAll.push(this)
     }//constructor
     static all(){ return CategoryAll}
   }//Category
   /////////////////////////////////////////////////////////////////////////////class Item, move to Item.js
   class Item{
     constructor(category,id,title,brand,image,size,price,description){
       this.category = category
       this.id = id;
       this.title = title;
       this.brand = brand;
       this.image = image;
       this.size = size;
       this.price = price;
       this.description = description
       ItemAll.push(this)
     }//constructor
     static all(){return ItemAll}
   }//Item

   /////////////////////////////////////////////////////////////////////////////move to category.js ?????
   function parseJSONIntoClasses(json){
     console.log("THIS IS ALL JSON:");
     console.log(json);
     json.forEach(function(category){
       let newCategory = new Category(category.id,category.name)
       category.items.forEach(function(item){
         //chose category.id over an instance below because question:
         // is it a pointer to the instance? or a new instance? It is the pointer
         //because CategoryAll[0] === ItemAll[0].category is true
         let newItem = new Item(newCategory,item.id,item.title,item.brand,item.image,item.size,item.price,item.description) //////////////ADD DESCRIPTION BY SENDING IT VIA JSON  THEN ADDD TO HERE
       })//forEach item
     })//forEach category aka category
     console.log("CategoryAll");
     console.log(CategoryAll.length)
     console.log(CategoryAll)
     console.log("ItemAll");
     console.log(ItemAll);
     // debugger
     displayItems()
   }
   /////////////////////////////////////////////////////////////////////////////display
   function displayItems(category="all"){
     let displayhtml = ""
     displayhtml += `<div class="container"><div class="row fp-row-items">`
     // if(category = all){}
     ItemAll.forEach(function(item){                                           //add itemID and link to item
       let image = "./src/image/defaultflex.jpg"
       if (item.image != ""){image = item.image}
       let itemhtml = `<div class="col-md-3" style="padding-top: 15px; padding-bottom: 15px" data-fp-grid-item="${item.id}">`  //move style to css
       itemhtml += `<img src="${image}" class="img-responsive" data-fp-image-item="${item.id}" data-fp-grid-item="${item.id}">`
       itemhtml += `<br><strong data-fp-grid-item="${item.id}">${item.brand}</strong>`
       //////
       let shortTitle= ""
       if(item.title){
         if (item.title.length > 40){ shortTitle= item.title.substring(0,37)+"..."}  //move to own function?
         else {shortTitle= item.title}
         itemhtml += `<br><span data-fp-grid-item="${item.id}" style="font-size: .9em">${shortTitle}</span>`
       }
       //////
       itemhtml += `<br><span data-fp-grid-item="${item.id}">$${item.price}</span>`
       itemhtml += `</div>`
       displayhtml += itemhtml
     })//forEach
     displayhtml += `</div></div>` //close container and row
     document.querySelector('#main').innerHTML = ""
     document.querySelector('#main').innerHTML += displayhtml
     addEventListenerFrontPageItems()
   }//display
    ////////////////////////////////////////////////////////////////////////////addEventListener to frontpage items
    function addEventListenerFrontPageItems(){
      let fp = document.querySelector(".fp-row-items")
      fp.addEventListener("click",function(e){
        // console.log("addEventListenerFrontPageItems: Clicked grid item: id below:");
        // console.log(e.target);
        // console.log(e.target.getAttribute("data-fp-grid-item"));
        let id = e.target.getAttribute("data-fp-grid-item")
        if(id){displayItem(id)}
      })
    }//addEventListenerFrontPageItems


 })//document.addEventListener

 ////////////////////////////////////////////////////////////////////////////displayItem **single
 function displayItem(id){
   //get item with id of id
   let item = ItemAll.find(item => item.id == id)
   console.log(item);
   //clear main
   let main = document.querySelector("#main")
   let itemhtml = ""
   main.innerHTML = ""
   itemhtml += `<div class="container"><div class="row">`
   let image = "./src/image/defaultflex.jpg"
   if (item.image != ""){image = item.image}
   itemhtml += `<div class="col-md-6"><img src="${image}" class="img-responsive"></div>`
   itemhtml += `<div class="col-md-1"></div>`
   itemhtml += `<div class="col-md-4">`
   itemhtml +=  `<h3>${item.brand.toUpperCase()}</h3>`
   itemhtml +=  `<br><span>${item.title}</span>`
   itemhtml +=  `<br><span>SIZE: ${item.size}</span>`
   itemhtml +=  `<br><span style="font-size: 1.25em"><strong>$${item.price}</strong></span>`
   itemhtml += `<br><br><br><br><br>`
   itemhtml += `<p>DESCRIPTION</p>`
   itemhtml += `<p style="font-size:.9em">${item.description}</p>`
   // itemhtml += `<span></span>`
   itemhtml += `</div>` //end col-md-4
   // itemhtml += `<div class="col-md-12"><img src="${image}" class=""></div>`
   itemhtml += `</div></div>` //close container and row
   //display on main
   main.innerHTML = itemhtml
 }
