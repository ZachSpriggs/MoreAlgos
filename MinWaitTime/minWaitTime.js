function minimumWaitingTime(queries) {
    // Write your code here.
    // sort input array 
    queries.sort((a, b) => a - b);
    // declare variable for wait time 
    let waitTime = 0;
    for (let i = 0; i < queries.length; i++) {
        // set duration to the value at i in input array 
        const duration = queries[i];
        // queries left is set to the what's left in the length of array
        const queriesLeft = queries.length - (i + 1);
        // set the wait time to the current value multiplied by how many queries are left in the input array 
        waitTime += duration * queriesLeft;
    }
    return waitTime;
}

let arr = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(arr));
