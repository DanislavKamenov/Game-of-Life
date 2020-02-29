const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const resolution = 25;

function start() {    
    let renderer = setupCanvas();
    let rows = Math.floor(canvasWidth / resolution);
    let cols = Math.floor(canvasHeight / resolution);
    let seed = SeedGenerator.createSeed(rows, cols, 0.5);

    draw(renderer, seed);
}

function draw(renderer, seed) {
    for (let i = 0; i < seed.length; i++) {
        for (let j = 0; j < seed[i].length; j++) {
            let x =  resolution * i;
            let y = resolution * j;

            seed[i][j] > 0 ? renderer.ctx.fillStyle = 'green' : renderer.ctx.fillStyle = 'white';
            renderer.ctx.fillRect(x, y, resolution - 1, resolution - 1);
        }
    }

    let nextGen = SeedGenerator.createNextGeneration(seed);
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