function displayItem(id){
  //get item with id of id
  let item = ItemAll.find(item => item.id == id)
  // console.log(item);
  //clear main
  let main = document.querySelector("#main")
  let itemhtml = ""
  main.innerHTML = ""
  itemhtml += `<div class="container itemContainer"><div class="row">`
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


/////////////////////////////////////////////////////////////////////////////displayItems
function displayItems(category="all"){
  // navShowDefault() //reset navbar buttons if changed
  navShowCategories() //decided that best to display categories, as the logo would display home and items, and we dont have profile
  let displayhtml = ""
  // displayhtml += `<div class="container"><div class="row fp-row-items">`
  displayhtml += `<div class="container">` //
  // if(category = all){}
  let count = 0
  ItemAll.forEach(function(item){                                           //add itemID and link to item

   if(category == "all" || category == item.category.name.toLowerCase()){
     if(count==0){displayhtml += `<div class="row fp-row-items">`}
      let image = "./src/image/defaultflex.jpg"
      if (item.image != ""){image = item.image}
      let itemhtml = `<div class="col-md-3" align="center" style="padding-top: 15px; padding-bottom: 15px" data-fp-grid-item="${item.id}">`  //move style to css
      itemhtml += `<img src="${image}" class="img-responsive" data-fp-image-item="${item.id}" data-fp-grid-item="${item.id}">`
      itemhtml += `<br><strong data-fp-grid-item="${item.id}">${item.brand}</strong>`
      //////
      let shortTitle= ""
      if(item.title){
        if (item.title.length > 40){ shortTitle= item.title.substring(0,32)+"..."}  //move to own function?
        else {shortTitle= item.title}
        itemhtml += `<br><span data-fp-grid-item="${item.id}" style="font-size: .9em">${shortTitle}</span>`
      }
      //////
      itemhtml += `<br><span data-fp-grid-item="${item.id}">$${item.price}</span>`
      itemhtml += `</div><!-- END COL-->`
      displayhtml += itemhtml
      if (count == 3){displayhtml += `<br></div><!-- END ROW-->`}
      // console.log("count is :" +count);
      ++count;
      if (count == 4){ count = 0}
    }//end if category == all

    })//forEach
    displayhtml += `</div><!-- CLOSE CONTAINER -->` //close container and row
  document.querySelector('#main').innerHTML = ""
  document.querySelector('#main').innerHTML += displayhtml
  addEventListenerFrontPageItems()
}//display
