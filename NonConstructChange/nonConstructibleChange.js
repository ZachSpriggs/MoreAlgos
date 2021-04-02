function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	
	let change = 0;
	for(const coin of coins){
		if(coin > change + 1){
			return change + 1;
		}
		change += coin;
	}
	return change + 1;
}

let coins = [5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructibleChange(coins));