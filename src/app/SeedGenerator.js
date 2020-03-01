export default class SeedGenerator {
    static createSeed(rows, cols, livingCellsPercent) {
        let seed = SeedGenerator._createEmptySeed(rows, cols);

        for (let i = 0; i < seed.length; i++) {
            for (let j = 0; j < seed[i].length; j++) {
                if (Math.random() >= livingCellsPercent) {
                    seed[i][j] = 1;
                }            
            }
        }

        return seed;
    }

    static createNextGeneration(seed) {
        let next = SeedGenerator._createEmptySeed(seed.length, seed[0].length);
        for (let i = 0; i < seed.length; i++) {
            for (let j = 0; j < seed[i].length; j++) {
               let livingNeighbours = SeedGenerator._livingNeighboursCount(seed, i, j);
               let state = seed[i][j];
    
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

    static _createEmptySeed(rows, cols) {
        let seed = new Array(rows);
        for (let i = 0; i < rows; i++) {
            seed[i] = new Array(cols);
            for (let j = 0; j < cols; j++) {
                seed[i][j] = 0;
            }
        }
    
        return seed;
    }

    static _livingNeighboursCount(seed, x, y) {
        let livingNeighbours = 0;

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let rows = (x + i + seed.length) % seed.length;
                let cols = (y + j + seed[x].length) % seed[x].length;
    
               livingNeighbours += seed[rows][cols];       
            }
        }
    
        //Do not count yourself.
        livingNeighbours -= seed[x][y];
        return livingNeighbours;
    }
}