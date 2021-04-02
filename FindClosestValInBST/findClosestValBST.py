# Time complexity Average: O(Log(n)) | Space:  O(Log(n))
# worst: O(n) time | O(n) space 

# RECURSIVE METHOD  
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper(tree, target, closest):
    # If tree is empty just return 
    if tree is none:
        return closest
    # find difference between our closest node with target node 
    if abs(target - closest) > abs(target - tree.value):
        #if target val is farther from closest than tree value, we update closest to be tree value 
        closest = tree.value
    # compare target to value and decide which side of the tree to keep traversing
    if target < tree.value:
        # traverse left side of tree
        return findClosestValueInBstHelper(tree.left, target, closest)
        # traverse right side of tree
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else: 
        return closest


# ITERATIVE METHOD
def findClosestValueInBst1(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper1(tree, target, closest):
    # var that points to current node 
    curr = tree
    #keep looping while there is a node 
    while curr is not None:
        # find difference between our closest node with target node
        if abs(target - closest) > abs(target - curr.value):
        #if target val is farther from closest than tree value, we update closest to be current value 
            closest = curr.value
    # compare target to value and decide which side of the tree to keep traversing
    if target < curr.value:
        # traverse left side of tree
        curr = curr.left
        # traverse right side of tree
    elif target > curr.value:
        curr = curr.right
    else: 
        break
    return closest