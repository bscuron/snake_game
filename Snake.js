class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dir = 2;
        this.length = 5; //1 to start
        this.body = []; //the previous positions of the snake head
    }

    update(){
        this.movesPerTurn = [];
        let temp_grid = grid.grid;
        let current_position = [this.x, this.y];
        this.body.push(current_position);

        if(this.dir == 0 && this.y != 0){
            this.y -= 1;
        }else if(this.dir == 1 && this.x != grid.cols-1){
            this.x += 1;
        }else if(this.dir == 2 && this.y != grid.rows-1){
            this.y += 1;
        }else if(this.dir == 3 && this.x != 0){
            this.x -= 1;
        }

        if(temp_grid[this.y][this.x] == 2){
            this.length += 3;
        }

        if(temp_grid[this.y][this.x] == 1){
            GAME_OVER = true;
        }

        while(this.body.length > this.length){
            let to_be_deleted_x = this.body[0][0]; 
            let to_be_deleted_y = this.body[0][1]; 
            grid.set(to_be_deleted_x, to_be_deleted_y, 0);
            this.body.shift();
        }
    }
}

function keyPressed(){
    if(snake.movesPerTurn.length == 0){
        if(keyCode === UP_ARROW && snake.dir != 2){
            snake.dir = 0;
            snake.movesPerTurn.push(0);
        }else if(keyCode === RIGHT_ARROW && snake.dir != 3){
            snake.dir = 1;
            snake.movesPerTurn.push(1);
        }else if(keyCode === DOWN_ARROW && snake.dir != 0){
            snake.dir = 2;
            snake.movesPerTurn.push(2);
        }else if(keyCode === LEFT_ARROW && snake.dir != 1){
            snake.dir = 3;
            snake.movesPerTurn.push(3);
        }
    }
}
