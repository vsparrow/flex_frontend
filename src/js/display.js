function displayItem(id){
  let item = ItemAll.find(item => item.id == id)
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
  itemhtml += `</div>` //end col-md-4
  itemhtml += `</div></div>` //close container and row
  main.innerHTML = itemhtml
}


////////////////////////////////////////////////////////////////////////////////displayItems
function displayItems(category="all", itemarray = []){
  navShowCategories() //if item with new category added, navbar would update
  let displayhtml = ""
  displayhtml += `<div class="container">`
  let count = 0
  let items = itemarray
  if(itemarray.length == 0) {items = ItemAll}
  // ItemAll.forEach(function(item){
  items.forEach(function(item){
   if(category == "all" || category == item.category.name.toLowerCase()){
     if(count==0){displayhtml += `<div class="row fp-row-items">`}
      let image = "./src/image/defaultflex.jpg"
      if (item.image != ""){image = item.image}
      let itemhtml = `<div class="col-md-3" align="center" style="padding-top: 15px; padding-bottom: 15px" data-fp-grid-item="${item.id}">`
      itemhtml += `<img src="${image}" class="img-responsive" data-fp-image-item="${item.id}" data-fp-grid-item="${item.id}">`
      itemhtml += `<br><strong data-fp-grid-item="${item.id}">${item.brand}</strong>`
      let shortTitle= ""
      if(item.title){
        if (item.title.length > 40){ shortTitle= item.title.substring(0,32)+"..."}  //move to own function?
        else {shortTitle= item.title}
        itemhtml += `<br><span data-fp-grid-item="${item.id}" style="font-size: .9em">${shortTitle}</span>`
      }
      itemhtml += `<br><span data-fp-grid-item="${item.id}">$${item.price}</span>`
      itemhtml += `</div><!-- END COL-->`
      displayhtml += itemhtml
      if (count == 3){displayhtml += `<br></div><!-- END ROW-->`}
      ++count;
      if (count == 4){ count = 0}
    }//end if category == all
  })//forEach
  displayhtml += `</div><!-- CLOSE CONTAINER -->` //close container and row
  document.querySelector('#main').innerHTML = ""
  document.querySelector('#main').innerHTML += displayhtml
  addEventListenerFrontPageItems()
}//displayItems
////////////////////////////////////////////////////////////////////////////////redisplay()
//called by sortItemsByPrice()
function redisplay(arrayOfElements){
  let mainhtml = document.querySelector("#main .container")
  displayhtml = ""
  let count = 0;
  arrayOfElements.forEach(function(el){
    if(count==0){displayhtml += `<div class="row fp-row-items">`}
    displayhtml += el.outerHTML
    if (count == 3){displayhtml += `<br></div><!-- END ROW-->`}
    ++count;
    if (count == 4){ count = 0}
  })
  mainhtml.innerHTML = displayhtml
}
////////////////////////////////////////////////////////////////////////////////displaySearchItems
//called by Item:searchItems()
function displaySearchItems(results,searchval=""){
  let main = document.querySelector("#main")
  main.innerHTML = ""
  if (results.length == 0){
    main.innerHTML = `<div class="container"><div class="row ">`
    main.innerHTML += `<h1 style="font-size: 5em; text-align: center"><i class="fa fa-exclamation-triangle "></i></h1>`
    main.innerHTML += `<h1 style="font-size: 5em; text-align: center">Redirecting To Home</h1>`
    main.innerHTML += `<h1 style="font-size: 5em; text-align: center; color: red">"${searchval}" Not Found</h1>`
    main.innerHTML += `</div></div>`
    setTimeout(function(){displayItems()},5000)
  }
  else {
    displayItems("all",results) //display all items in results
  }//else
}//displaySearchItems
