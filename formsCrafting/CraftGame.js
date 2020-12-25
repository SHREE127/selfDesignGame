class Craft_Game{
    constructor(){}
    
    start(){
      
            if(gameState===41){
                preview.hide();
                CRAFTING_form= new craft_form();
                CRAFTING_form.display();
                fill("black")
                textSize(40)
                text("CRAFTING is my love", displayWidth/2-80,displayHeight/2-100)
                
            }
            
        }
    
}