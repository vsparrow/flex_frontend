const ItemAll = []

class Item{
  constructor(category,id,title,brand,image,size,price,description){
    this.category = category
    this.id = id;
    this.title = title;
    this.brand = brand;
    this.image = imageFix(image);
    this.size = size;
    this.price = price;
    this.description = description
    ItemAll.push(this)
  }//constructor
  static all(){return ItemAll}
}//Item


////////////////////////////////////////////////////////////////////////////////sortItemsByPrice
function imageFix(jsonImage){
  //The site was designed to be hosted locally for mod3
  //the json object rerers to local pc, so can edit on api side, or just made a function as I did here
  let split = jsonImage.split("/")
  let url = "https://flex-the-api.herokuapp.com/images/"
  return (url + split[split.length-1]);
}



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
////////////////////////////////////////////////////////////////////////////////searchItems

function searchItems(){
  searchval = document.querySelector('#search').value
  document.querySelector('#search').value = ""
  console.log(searchval);
  resultsArr = []
  ItemAll.forEach(function(item){
    if (
    (item.title.toLowerCase().indexOf(searchval) >= 0) ||
    (item.brand.toLowerCase().indexOf(searchval) >= 0) ||
    (item.size.toLowerCase().indexOf(searchval) >=0) ||
    (item.description.toLowerCase().indexOf(searchval) >= 0)
    )
    {resultsArr.push(item)}
  })//forEach
  displaySearchItems(resultsArr,searchval)
}
