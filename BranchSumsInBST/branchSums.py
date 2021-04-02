def branchSums(root):
    # Write your code here.
	sums = []
	calculateBranchSums(root, 0, sums)
	return sums

def calculateBranchSums(node, runningSums, sums):
	if node is None:
		return
	newSum = runningSums + node.value
	if node.left is None and node.right is None:
		sums.append(newSum)
		return
	
	calculateBranchSums(node.left, newSum, sums)
	calculateBranchSums(node.right, newSum, sums)
