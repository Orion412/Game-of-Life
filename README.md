Conway's Game of Life

made with p5.js & JavaScript

Also known as Life, CGoL is a Turing complete, cellular automaton created by British mathematician John Horton Conwayin 1970.

--RULES--

The universe is an infinite, 2-dimensional, orthogonal grid of square cells with 2 potential states: "live" or "dead" (white or black).
Every cell interacts with it's 8 neighbors (above, below, left, right, and 4 diagonal) with each step in time (aka every "generation").
Life is a zero-player game, meaning no input is required, except to "seed" the first generation (this can only be done randomly, for now).

The following rules are applied to every cell, every "generation":

1. Underpopulation: Any live cell with less than 2 live neighbors dies
2. Prolonging: Any live cell with 2 or 3 live neighbors lives on to the next generation
3. Overpopulation: Any cell with more than 3 neighbors dies
4. Reproduction: Any dead cell with exactly 3 live neighbors comes to life

--NOTES--

To restart the simulation, refresh the page.
Currently, edges will remain unchanged from intitial seed until the page is refreshed. This takes away the idea that the world is infinite, and will be changed in the future. Until then, enjoy the endless lifecycle of a captive universe :)

--TODO--

1. add restart button
2. add start and stop buttons
3. add seeding functionality
4. in-depth history page?
5. color controls?
6. observe and alter the past?
