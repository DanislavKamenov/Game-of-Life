const canvasWidth = 1920;
const canvasHeight = 966;
const resolution = 25;

function createMatrix(cols, rows) {
    let array = new Array(cols);
    for (let i = 0; i < cols; i++) {
        array[i] = new Array(rows);
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 0;
        }
    }

    return array;
}

function fillMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (Math.random() >= 0.5) {
                matrix[i][j] = 1;
            }            
        }
    }
}

function start() {    
    let renderer = setupCanvas();
    let cols = Math.floor(canvasWidth / resolution);
    let rows = Math.floor(canvasHeight / resolution);
    let matrix = createMatrix(cols, rows);
    fillMatrix(matrix);

    draw(renderer, matrix);
}

function draw(renderer, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let x =  resolution * i;
            let y = resolution * j;

            matrix[i][j] > 0 ? renderer.ctx.fillStyle = 'green' : renderer.ctx.fillStyle = 'white';
            renderer.ctx.fillRect(x, y, resolution - 1, resolution - 1);
        }
    }

    let nextGen = createNextGeneration(matrix);
    setTimeout(() => draw(renderer, nextGen), 100);
}

function setupCanvas() {
    let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    return {
        canvas,
        ctx,
    };
}

function createNextGeneration(matrix) {
    let next = createMatrix(matrix.length, matrix[0].length);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           let livingNeighbours = countLivingNeighbors(matrix, i, j);
           let state = matrix[i][j];

           if (state === 0 && livingNeighbours === 3) {
               next[i][j] = 1;
           } else if (state === 1 && (livingNeighbours < 2 || livingNeighbours > 3)) {
               next[i][j] = 0;
           } else {
               next[i][j] = state;
           }
        }
    }

    return next;
}

function countLivingNeighbors(matrix, x, y) {
    let livingNeighbours = 0;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let cols = (x + i + matrix.length) % matrix.length;
            let rows = (y + j + matrix[x].length) % matrix[x].length;

           livingNeighbours += matrix[cols][rows];       
        }
    }

    //Do not count yourself.
    livingNeighbours -= matrix[x][y];
    return livingNeighbours;
}