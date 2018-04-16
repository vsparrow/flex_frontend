 document.addEventListener('DOMContentLoaded', function(){
   console.log("HI");
   /////////////////////////////////////////////////////////////////////////////fetch move to adapter
   const urlbase = "http://127.0.0.1:3000/api/v1/"
   let url = urlbase + "categories"
   // fetch(url).then(res=>res.json()).then(json=>console.log(json))
   fetch(url).then(res=>res.json()).then(json=>parseJSON(json))
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

   /////////////////////////////////////////////////////////////////////////////move to category.js ?????
   function parseJSON(json){
     json.forEach(function(obj){
       let category = new Category(obj.id,obj.name)
     })
     console.log("CategoryAll");
     console.log(CategoryAll.length)
     console.log(CategoryAll)
   }

 })//document.addEventListener
