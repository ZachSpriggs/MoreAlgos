function branchSums(root){
    let sums = []
    calculateBranchSums(root, 0, sums);
    return sums
}

function calculateBranchSums(node, runningSums, sums){
    if(!node){
        return;
    }
    let newSum = runningSums + node.value;
    if(!node.left && !node.right){
        sums.push(newSum);
        return
    }
    calculateBranchSums(node.left, newSum, sums)
    calculateBranchSums(node.right, newSum, sums)
}