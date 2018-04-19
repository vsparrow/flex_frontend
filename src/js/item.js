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


////////////////////////////////////////////////////////////////////////////////sortItemsByPrice
function sortItemsByPrice(howtosort){
  let allrows = document.querySelectorAll("#main .container .row .col-md-3")
  let allrowsarray = Array.from(allrows)
  if(allrowsarray.length > 0 ){
    let sortedArray = allrowsarray.sort(function(a,b){
      if(howtosort=="high"){
        return  (Number(b.lastChild.innerText.split("$").join(" "))) -Number(a.lastChild.innerText.split("$").join(" "))
      }
      else {
        return Number(a.lastChild.innerText.split("$").join(" ")) - (Number(b.lastChild.innerText.split("$").join(" ")))
      }
    })
    redisplay(sortedArray)
  }
}//end sortItemsByPrice
