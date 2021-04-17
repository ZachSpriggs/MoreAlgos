
// Time complexity is O(V+E) because we add each node to the array from each vertex, E refers to the length of the for loop which is dictated by the number of edges for each branch 


class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        // Write your code here.
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}

// Do not edit the line below.
exports.Node = Node;