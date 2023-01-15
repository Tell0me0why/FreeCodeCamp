// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value.length >= 1) {
      records.id.artist = value;
    }
    else if (records.id.hasOwnProperety("tracks") && value.length >= 1) {
      records.id.tracks = [];
      records.id.tracks.push(value)
    } else if (prop == "tracks" && value.length >= 1){
       records.id.tracks.push(value);
    }
  
    if (value.length < 1) {
      delete records.id[prop];
    }
    return records;
  }
  
  console.log(recordCollection['5439'].artist, " ");

  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  console.log(recordCollection['5439'].artist);