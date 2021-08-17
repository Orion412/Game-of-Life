Conway's Game of Life

made with p5.js & JavaScript

Also simply known as "Life", CGoL is a Turing complete cellular automaton made in 1970 by British mathematician John Horton Conway.

--RULES--
The universe is an infinite*, 2-dimensional, orthogonal grid of square "cells" with 2 potential states: "live" or "dead" (defined by a 1 or 0 in this example)
Every "cell" interacts with it's 8 neighbors (above, below, left, right, and 4 diagonal) with each step in time (aka every "generation").
There is no input required, besides creating the initial state ("seed").
The following rules are applied to every "cell", every "generation":

1. Underpopulation: Any live cell with less than 2 live neighbors dies
2. Prolonging: Any live cell with 2 or 3 live neighbors lives on to the next generation
3. Overpopulation: Any cell with more than 3 neighbors dies
4. Reproduction: Any dead cell with exactly 3 live neighbors comes to life
