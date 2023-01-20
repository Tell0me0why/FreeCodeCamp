function warnTheSheep(queue) {
    for (let i = 0; i < queue.length; ++i) {
      if (queue[i] == "wolf") {
        if (i == queue.length -1) {
          return "Pls go away and stop eating my sheep"
        } else {
          return "Oi! Sheep number "  +  [queue.length - i - 1] + "! You are about to be eaten by a wolf!" 
        }
      }
    }
  
  }

  console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));