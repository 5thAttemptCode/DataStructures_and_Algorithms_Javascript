// CASE
// Adjacency matrix would be useful is in modeling a transportation network
// such as a subway or metro system. In this scenario, each station is a node, and direct 
// connections between stations are edges. An adjacency matrix provides a clear and 
// efficient way to represent and query the connectivity between stations, especially 
// when the graph is dense - many stations are directly connected to many other stations.
// In this scenario, each station in the subway system is represented by a node, and the presence of a 
// direct route between two stations is represented by an edge. An adjacency matrix can be used to 
// quickly determine if there is a direct connection between any two stations.


// Adjacency matrix representing the subway system
const adjacencyMatrix = [
  //  0  1  2  3  4 (stations)
  // the array below: 1 = true, 0 = false
  [ 0, 1, 1, 0, 0], // Station 0 connected to stations 1 and 2
  [ 1, 0, 0, 1, 0], // Station 1 connected to stations 0 and 3
  [ 1, 0, 0, 1, 1], // Station 2 connected to stations 0, 3, and 4
  [ 0, 1, 1, 0, 0], // Station 3 connected to stations 1 and 2
  [ 0, 0, 1, 0, 0]  // Station 4 connected to station 2
]

// Function to check if there's a direct route between two stations
function hasDirectRoute(stationA, stationB) {
  return adjacencyMatrix[stationA][stationB] === 1
}

// Function to find all direct connections for a given station
function findDirectConnections(station) {
  const connections = []
  for (let i = 0; i < adjacencyMatrix.length; i++) {
    if (adjacencyMatrix[station][i] === 1) {
      connections.push(i)
    }
  }
  return connections
}

// Example usage:
const stationA = 0
const stationB = 3
const directRouteExists = hasDirectRoute(stationA, stationB)
console.log(`Direct route between station ${stationA} and station ${stationB}: ${directRouteExists ? 'Yes' : 'No'}`)

const station = 2
const directConnections = findDirectConnections(station)
console.log(`Station ${station} is directly connected to stations: ${directConnections.join(', ')}`)