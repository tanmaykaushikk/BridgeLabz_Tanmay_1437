class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

function dijkstra(graph, start, end) {
  const distances = {};
  const queue = new PriorityQueue();
  const previous = {};
  const path = []; // to store the shortest path and return it in the end

  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      queue.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (queue.values.length) {
    const smallest = queue.dequeue().val;

    if(smallest === end){
        let current = smallest;
        while(current){
            path.push(current);
            current = previous[current];
        }
        return path.reverse();
    }
    
    if(smallest || distances[smallest] !== Infinity){
        for(let neighbour in graph[smallest]){
            let distance = distances[smallest] + graph[smallest][neighbour];
            if(distance < distances[neighbour]){
                distances[neighbour] = distance;
                previous[neighbour] = smallest;
                queue.enqueue(neighbour,distance);
            }
        }
    }
  }
   
  return path;
}


const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, E: 3 },
  C: { A: 2, D: 2, F: 4 },
  D: { C: 2, E: 3, F: 1 },
  E: { B: 3, D: 3, F: 1 },
  F: { C: 4, D: 1, E: 1 }
};


const shortestPath = dijkstra(graph, "A", "E");
console.log(shortestPath); 

