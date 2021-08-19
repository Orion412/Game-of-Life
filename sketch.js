//create array of colums and rows
function createArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

//create canvas to display array as a grid
let grid;
let cols;
let rows;
let resolution = 5; //size of cells

function setup() {
  createCanvas(1000, 500);
  cols = width / resolution;
  rows = height / resolution;

  grid = createArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2)); //random seeding of cells
    }
  }
}

//fill in living and dead cells
function draw() {
  background(0); //dead cells
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255); //live cells
        rect(x, y, resolution, resolution);
      }
    }
  }

  //compute next generation based on previous
  let next = createArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      //edges keep same value as previous generation, will change later to wrap
      if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
        next[i][j] = state;
      } else {
        //count LIVE neighbors
        let sum = 0;
        let neighbors = countNeighbors(grid, i, j);
        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
  }
  grid = next;
}

//count ALL neighbors
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      sum += grid[x + i][y + j];
    }
  }

  //cell doesnt count self as neighbor
  sum -= grid[x][y];
  return sum;
}
