function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    let maxSpeed = 0;
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    if (!fastest) {
        reverseArray(redShirtSpeeds);
    }

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        const rider1 = redShirtSpeeds[i];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
        maxSpeed += Math.max(rider1, rider2);
    }

    return maxSpeed;
}

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let red = [1,3,5,7,8];
let blue = [4,1,6,8,1];

console.log(tandemBicycle(red, blue, true));

console.log(tandemBicycle(red, blue, false));