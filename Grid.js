class Grid{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.grid;
        this.create();
    }

    create(){
        this.grid = [];
        for(let r = 0; r < this.rows; r++){
            this.grid.push([]);
            for(let c = 0; c < this.cols; c++){
                this.grid[r].push(0);
            }
        }
    }

    reset(){
        this.create();
    }

    show(){
        let xstep = width/this.cols;
        let ystep = height/this.rows;

        for(let r = 0; r < this.grid.length; r++){
            for(let c = 0; c < this.grid[r].length; c++){
                push();
                let cell = this.grid[r][c];
                if(cell == 0){
                    noStroke();
                    fill('#0000A8');
                }else if(cell == 1){
                    stroke('#999931');
                    fill('#ffff54');
                }else if(cell == 2){
                    stroke('#910000');
                    fill('#ff0000');
                }
                rect(xstep * c, ystep * r, xstep, ystep);
                pop();
            }
        }
    }

    set(x,y, value){
        if(x > this.cols-1)
            x = this.cols-1;
        else if(x < 0)
            x = 0;
        if(y > this.rows-1)
            y = this.rows-1;
        else if(y < 0)
            y = 0;
        this.grid[y][x] = value;
    }

    hasFood(){
        let food_found = false;
        for(let r = 0; r < this.grid.length; r++){
            for(let c = 0; c < this.grid[r].length; c++){
                if(this.grid[r][c] == 2)
                    food_found = true;
            }
        }
        return food_found;
    }

    generateFood(){
        let location_found = false;

        while(!location_found){
            let p_x = Math.floor(Math.random() * this.cols);
            let p_y = Math.floor(Math.random() * this.rows);
            for(let r = 0; r < this.grid.length; r++){
                for(let c = 0; c < this.grid[r].length; c++){
                    if(this.grid[p_y][p_x] == 0){
                        location_found = true;
                        this.grid[p_y][p_x] = 2;
                        break;
                    }
                }
            }
        }
    }

    getValue(x,y){
        return this.grid[y][x];
    }

    openSpot(){
        let open_spot = false;
        for(let r = 0; r < this.grid.length; r++){
            for(let c = 0; c < this.grid[r].length; c++){
                if(this.grid[r][c] == 0){
                    open_spot = true;
                    break;
                }
            }
        }

        return open_spot;
    }
}
