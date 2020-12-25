class Dance_Game{
    constructor(){}
   
    start(){
     
            if(gameState===21){
                preview.hide();
                DANCING_form= new dance_form();
                DANCING_form.display();
                fill("black")
                textSize(40)
                text("DANCING is my love", displayWidth/2-80,displayHeight/2-100)
                
            }
        }}
           