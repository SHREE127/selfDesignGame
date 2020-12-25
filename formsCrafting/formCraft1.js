class craft_form{

    constructor(){
        this.button1= createButton('EASY');
        this.button2= createButton('MEDIUM');
        this.button3= createButton('HARD');
        this.button4= createButton('EXPERT');  
    }
    display(){
       

        this.button1.position(displayWidth/2-100,displayHeight/2-50)
        this.button2.position(displayWidth/2+100,displayHeight/2-50)
        this.button3.position(displayWidth/2-100,displayHeight/2+50)
        this.button4.position(displayWidth/2+100,displayHeight/2+50)

        this.button1.mousePressed(()=>{
           
           this.hide();
           CRAFTING1_form= new easy_Crafting();
           CRAFTING1_form.display();
        })
        this.button2.mousePressed(()=>{
            this.hide();
            CRAFTING2_form= new medium_Crafting();
            CRAFTING2_form.display();
        })
        this.button3.mousePressed(()=>{
            this.hide();
            CRAFTING3_form= new hard_Crafting();
            CRAFTING3_form.display();
        })
        this.button4.mousePressed(()=>{
            this.hide();
           CRAFTING4_form= new expert_Crafting();
           CRAFTING4_form.display();
        })
        this.button1.size(100,50);
        this.button2.size(100,50);
        this.button3.size(100,50);
        this.button4.size(100,50);
    }
    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
    }
}