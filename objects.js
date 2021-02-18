var playlist = {'avraham freid': 'father dont crie'}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  Object.assign({}, playlist, artistName)
  
}