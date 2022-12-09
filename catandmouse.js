function catAndMouse(x, y, z) {
    let catA = x;
    let catB = y;
    let mouse = z;

    if((Math.abs(mouse - catA)) < (Math.abs(mouse - catB))){
        return "Cat A";
    } else if ((Math.abs(mouse - catA)) === (Math.abs(mouse - catB))){
        return "Mouse C";
    } else {
        return "Cat B";
    
    }
}

console.log(catAndMouse(1, 3, 2));