class Graph {
    constructor() {
        // Stores adjacency list where each vertex maps to a set of connected vertices (edges)
        this.adjacencyList = {};
    }

    // Adds a vertex to the graph
    addVertex(vertex) {
        // Only add the vertex if it doesn't already exist
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    // Adds an edge (connection) between two vertices
    addEdge(vertex1, vertex2) {
        // Ensure both vertices exist; if not, add them
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        // Add an edge between vertex1 and vertex2 (bidirectional)
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    // Displays the graph by printing each vertex and its connected vertices
    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    // Checks if there is an edge between two vertices
    hasEdge(vertex1, vertex2) {
        // Returns true if both vertices have each other in their adjacency list
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    // Removes an edge (connection) between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

    // Removes a vertex and all its connected edges from the graph
    removeVertex(vertex) {
        // If the vertex does not exist, exit
        if (!this.adjacencyList[vertex]) {
            return;
        }
        // Remove edges between the vertex and its adjacent vertices
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        // Remove the vertex itself
        delete this.adjacencyList[vertex];
    }

    // Breadth-First Search (BFS) traversal starting from the given vertex
    bfs(start) {
        const queue = [start]; // Initialize queue with the starting vertex
        const result = [];      // To store the order of traversal
        const visited = new Set(); // Set to track visited vertices
        visited.add(start);

        while (queue.length > 0) {
            const currentVertex = queue.shift(); // Dequeue
            result.push(currentVertex);

            // Visit all unvisited neighbors
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result; // Return the order of traversal
    }

    // Depth-First Search (DFS) traversal (Iterative) starting from the given vertex
    dfsIterative(start) {
        const stack = [start];  // Initialize stack with the starting vertex
        const result = [];      // To store the order of traversal
        const visited = new Set(); // Set to track visited vertices
        visited.add(start);

        while (stack.length > 0) {
            const currentVertex = stack.pop(); // Pop from stack
            result.push(currentVertex);

            // Visit all unvisited neighbors
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            });
        }

        return result; // Return the order of traversal
    }
}

// Example usage of the Graph class
const graph = new Graph();

// Add vertices to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.display()

// Add edges (connections) between vertices
graph.addEdge("A", "B");
graph.addEdge("B", "C");

// Display the graph
graph.display();
// Output: 
// A -> B
// B -> A,C
// C -> B

// Check if an edge exists between A and C (should be false)
console.log(graph.hasEdge("A", "C")); // false
// Check if an edge exists between A and B (should be true)
console.log(graph.hasEdge("A", "B")); // true

// Remove an edge between A and B
graph.removeEdge("A", "B");
graph.display(); 
// Output: 
// A -> 
// B -> C
// C -> B

// Remove vertex A from the graph
graph.removeVertex("A");
graph.display(); 
// Output: 
// B -> C
// C -> B

// Perform BFS traversal starting from vertex B
console.log(graph.bfs("B")); // ["B", "C"]

// Perform DFS traversal starting from vertex B
console.log(graph.dfsIterative("B")); // ["B", "C"]
