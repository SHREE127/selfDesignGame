class Paint_Game{
    constructor(){}
    start(){
      
            if(gameState===11){
                preview.hide();
                PAINTING_form=new paint_form();
                PAINTING_form.display();
                fill("black")
                textSize(40)
                text("PAINTING is my love", displayWidth/2-80,displayHeight/2-100)
            }
            
        
    }
}