class Form1{

    constructor(){

        this.button1= createButton('PAINTING');
        this.button2= createButton('DANCING');
        this.button3= createButton('CALLIGRAPHY');
        this.button4= createButton('CRAFTING');
    }
    display(){

        this.button1.position(displayWidth/2-100,displayHeight/2-50)
        this.button2.position(displayWidth/2+100,displayHeight/2-50)
        this.button3.position(displayWidth/2-100,displayHeight/2+50)
        this.button4.position(displayWidth/2+100,displayHeight/2+50)

        this.button1.mousePressed(()=>{
            gameState=11;
            paintGame.start();
            
        })
        this.button2.mousePressed(()=>{
            gameState=21;
           danceGame.start();
           

        })
        this.button3.mousePressed(()=>{
            gameState=31;
            calligraphyGame.start()
           
        })
        this.button4.mousePressed(()=>{
            gameState=41;
           craftGame.start();
          

        })

        this.button1.size(100,50);
        this.button2.size(100,50);
        this.button3.size(120,50);
        this.button4.size(100,50);
    }
    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
    }
}