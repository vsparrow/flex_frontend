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
