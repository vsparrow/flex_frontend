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
