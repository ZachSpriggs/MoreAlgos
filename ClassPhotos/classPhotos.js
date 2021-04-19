function classPhotos(redShirtHeights, blueShirtHeights) {
    // Sort arrays in descending order
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
    // declare simple length to iterate (both arrays contain the same number of elements)
    const arrLen = redShirtHeights.length;

    // determine the tallest student and assign their shirt color accordingly 
    const firstHeight = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
    for (let i = 0; i < arrLen; i++) {
        const blueShirt = blueShirtHeights[i];
        const redShirt = redShirtHeights[i];
        if (firstHeight === "RED") {
            if (redShirt >= blueShirt) return false;
        } else if (blueShirt >= redShirt) return false;
    }

    return true;
}

let red = [5, 8, 1, 3, 4];
let blue = [6, 9, 2, 4, 5];

console.log(classPhotos(red, blue));