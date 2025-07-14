const numIslands = (grid) => {
    const visit = (i, j) => {
        if (i < 0 || i >= grid.length){
            return;
        } else if (j < 0 || j >= grid[i].length){
            return;
        }

        if (grid[i][j] === '1'){
            grid[i][j] = '0';
            visit(i - 1, j);
            visit(i + 1, j);
            visit(i, j-1);
            visit(i, j+1);
        }
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                count++;
                visit(i, j);
            }
        }
    }

    return count;
}

const testcases = [
    [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]], 1],
    [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]], 3]
];

for (const [grid, expected] of testcases){
    const result = numIslands(grid);
    if (result !== expected){
        console.log(`Got ${result}, expected ${expected}`);
    } else {
        console.log(`pass`);
    }
}