class hard_Calligraphy {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Restart')
    }
    hide(){
    
      this.button.hide();
      this.input.hide();
      
    }
  
    display(){
      this.title.html("Your Hobby Quiz");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth- 60,30)
      
      this.button.mousePressed(()=>{
          this.hide();
          this.greeting.position(displayWidth/2-10,displayHeight/2-100)
          this.greeting.html("Hello ")
  
      });
  
      this.reset.mousePressed(()=>{
        gameState=0;
      })
    }
  }