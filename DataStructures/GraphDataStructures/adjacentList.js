// CASE
// Adjacency list would be particularly useful is in modeling a recommendation system for an 
// online streaming service, such as Netflix or Spotify. In such systems, users are nodes, 
// and edges represent the interactions between users and items. In this scenario, 
// each user has a list of items they have watched or listened to. This setup allows the 
// service to efficiently recommend new items based on the interactions of similar users.

// Adjacency list representing users and their watched items
const adjacencyList = {
    0: [2, 3], // User 0 watched items 2 and 3
    1: [2, 4], // User 1 watched items 2 and 4
    2: [0, 1, 3], // User 2 watched items 0, 1, and 3
    3: [1, 2], // User 3 watched items 1 and 2
    4: [2], // User 4 watched item 2
  }
  
  // Function to find items watched by a given user
  function findWatchedItems(userId) {
    return adjacencyList[userId] || []
  }
  
  // Function to recommend items to a user based on the items watched by similar users
  function recommendItems(userId) {
    const watchedItems = new Set(findWatchedItems(userId))
    const recommendations = new Set()
  
    // Iterate through each user's watched items
    for (let user in adjacencyList) {
      if (parseInt(user) !== userId) { // Skip the current user
        for (let item of adjacencyList[user]) {
          if (!watchedItems.has(item)) {
            recommendations.add(item) // Recommend items not already watched by the current user
          }
        }
      }
    }
  
    return Array.from(recommendations)
  }
  
  // Example usage:
  const userId = 2
  const userWatchedItems = findWatchedItems(userId)
  const recommendedItems = recommendItems(userId)
  
  console.log(`User ${userId} has watched items: ${userWatchedItems.join(', ')}`)
  console.log(`Recommended items for user ${userId}: ${recommendedItems.join(', ')}`)