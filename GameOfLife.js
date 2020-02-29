const canvasWidth = 1920;
const canvasHeight = 966;
const resolution = 25;

function start() {    
    let renderer = setupCanvas();
    let cols = Math.floor(canvasWidth / resolution);
    let rows = Math.floor(canvasHeight / resolution);
    let matrix = SeedGenerator.createSeed(cols, rows, 0.5);

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

    let nextGen = SeedGenerator.createNextGeneration(matrix);
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