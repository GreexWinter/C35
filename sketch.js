var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    // Refer to the databasse
    // Read the values fromthe database
    // When ever a change in value, read it. --- Listener listens to change in a particular location

    database.ref("Ball/Position").on("value", readPosition);
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    // Update the database with the new value
// x = from 50 to 51
//x = 51 should be written to database
// Where shouiD I update?

database.ref("Ball/Position").set({
    x: position.x + x,
    y: position.y + y
})


    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
