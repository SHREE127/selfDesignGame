var calligraphyGame;
var preview;
var PAINTING_form, CRAFTING_form, CALLIGRAPHY_form, DANCING_form;
var PAINTING1_form, CRAFTING1_form, CALLIGRAPHY1_form, DANCING1_form;
var PAINTING2_form, CRAFTING2_form, CALLIGRAPHY2_form, DANCING2_form;
var PAINTING3_form, CRAFTING3_form, CALLIGRAPHY3_form, DANCING3_form;
var PAINTING4_form, CRAFTING4_form, CALLIGRAPHY4_form, DANCING4_form;
var calligraphyEasy;
var gameState=0;
var player;
function preload(){
    
}

function setup(){
   
 var canvas = createCanvas(displayWidth,displayHeight);
 calligraphyGame = new Calligraphy_Game();
 paintGame = new Paint_Game();
 craftGame = new Craft_Game();
 danceGame = new Dance_Game();

preview = new Form1();
    
    
}

function draw(){
background("lightpink")
    preview.display();
   
    
}   