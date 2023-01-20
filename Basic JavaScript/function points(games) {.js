function points(games) {
    let points = 0;
    for (let i = 0; i < 10; ++i) {
      if (games[i][0] > games[i][2]) {
        points += 3;
      } else if (games[i][0] < games[i][2]) {
      
      } else {
        points++;
      }
    }
    return points
  }