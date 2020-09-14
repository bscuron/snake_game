let snake;
let grid;
let GRID_ROWS = 40;
let GRID_COLS = 40;
let SNAKE_SPEED = 10; //framerate
let GAME_OVER = false;
let WINNER = false;

function setup(){
    let cw = document.getElementById('canvas').offsetWidth;
    let ch = document.getElementById('canvas').offsetHeight;
    let canvas = createCanvas(cw,ch);
    canvas.parent('canvas');
    snake = new Snake(1,1);
    grid = new Grid(GRID_ROWS, GRID_COLS);
}

function draw(){
    document.getElementById('score').innerText = "Score: " + snake.length.toString();
    if(GAME_OVER){
        alert("Game Over\nScore: " + snake.length);
        SNAKE_SPEED = 0;
        location.reload();
    }
    if(!grid.openSpot()){
        alert("You won!\nScore: " + snake.length);
        SNAKE_SPEED = 0;
        location.reload();
    }
    frameRate(SNAKE_SPEED);
    background(51);
    grid.show();
    snake.update();
    grid.set(snake.x, snake.y, 1);
    if(!grid.hasFood()){
        grid.generateFood();
    }

}

