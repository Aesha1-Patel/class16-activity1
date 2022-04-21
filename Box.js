class Box
  {
    constructor()
    {
      this.x = 200;
      this.y = 50
      this.w = 50;
      this.h = 50;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move(v){
      this.y=this.y+v;
    }
    
    //write function to set the width of the box

  }

  
