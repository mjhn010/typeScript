/**
 * Let's make a game 🕹
 */
const position ={
    x:0,
    y:0
}

type Moving = 'up' | 'down' | 'left' | 'right';

function move2(moving:Moving){
    switch(moving){
        case 'up':
            return position.y++
            break;
        case 'down':
            return position.y--
            break;
        case 'left':
            return position.x--
            break;
        case 'right':
            return position.x++
            break;
    }
}

console.log(position); // { x: 0, y: 0}
move2('up');
console.log(position); // { x: 0, y: 1}
move2('down');
console.log(position); // { x: 0, y: 0}
move2('left');
console.log(position); // { x: -1, y: 0}
move2('right');
console.log(position); // { x: 0, y: 0}
