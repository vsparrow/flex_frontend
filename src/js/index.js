 document.addEventListener('DOMContentLoaded', function(){
   console.log("HI");
   /////////////////////////////////////////////////////////////////////////////fetch move to adapter
   const urlbase = "http://127.0.0.1:3000/api/v1/"
   let url = urlbase + "categories"
   // fetch(url).then(res=>res.json()).then(json=>console.log(json))
   fetch(url).then(res=>res.json()).then(json=>parseJSONIntoClasses(json))
   /////////////////////////////////////////////////////////////////////////////class category, move to category.js
   const CategoryAll = [];
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
   const ItemAll = []
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
         let newItem = new Item(newCategory,item.id,item.title,item.brand,item.image,item.size,item.price) //////////////ADD DESCRIPTION BY SENDING IT VIA JSON  THEN ADDD TO HERE
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
     displayhtml += `<div class="container"><div class="row">`
     // if(category = all){}
     ItemAll.forEach(function(item){                                           //add itemID and link to item
       let image = "./src/image/defaultflex.jpg"
       if (item.image != ""){image = item.image}
       let itemhtml = `<div class="col-md-3" style="padding-top: 15px; padding-bottom: 15px">`  //move style to css
       itemhtml += `<img src="${image}" class="img-responsive">`
       itemhtml += `<br>${item.brand}`
       itemhtml += `<br>$${item.price}`
       itemhtml += `</div>`
       displayhtml += itemhtml
     })//forEach
     displayhtml += `</div></div>` //close container and row
     document.querySelector('#main').innerHTML = ""
     document.querySelector('#main').innerHTML += displayhtml
   }//display

 })//document.addEventListener
