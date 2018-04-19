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
