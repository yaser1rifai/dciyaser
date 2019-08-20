class Rectangle {
  constructor(height, width) {    
    this.height = height;
    this.width = width;
  }
 static info(height,width){ return height* width}
 info(){return this.height* this.width}
 
 }
 

let R=new Rectangle(4,3)
console.log(Rectangle.info(4,6))
console.log(R.info(3,500))

