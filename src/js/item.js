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
