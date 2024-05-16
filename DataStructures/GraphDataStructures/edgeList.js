// CASE
// We have a social network where users are represented as nodes, and friendships or connections 
// between users are represented as edges. An edge list could be used to store the relationships 
// between users. For example, [0, 8] could represent that user 0 is connected with user 8. 
// This representation is straightforward and memory-efficient for sparse graphs.

// Define the edge list representing connections between users
const edgeList = [
    [0, 8], // User 0 is connected with user 2
    [3, 4], // User 1 is connected with user 3
    [2, 7], // User 2 is connected with user 3
    [9, 3]  // User 4 is connected with user 2
  ]
  
  // Function to find connections of a given user
  function findFriends(userId) {
    const friends = []
    // Iterate through the edge list to find connections involving the given user
    for (let i = 0; i < edgeList.length; i++) {
      const [userA, userB] = edgeList[i]
      // Check if the given user is one of the users in the connection
      if (userA === userId) {
        friends.push(userB)
      } else if (userB === userId) {
        friends.push(userA)
      }
    }
    return friends
  }
  
  // Example usage:
  const userId = 2
  const userFriends = findFriends(userId)
  console.log(`User ${userId} is friends with users: ${userFriends.join(', ')}`)