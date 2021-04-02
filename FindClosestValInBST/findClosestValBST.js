// Iterative method 
function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
    let curr = tree
    while (curr != null) {
        if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
            closest = curr.value
        }
        if (target < curr.value) {
            curr = curr.left;
        } else if (target > curr.value) {
            curr = curr.right;
        } else {
            break;
        }
    }
    return closest;
}

// Recursive method 
function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) {
        return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    }
    if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}