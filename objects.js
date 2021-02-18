var playlist = {'avraham freid': 'father dont crie'}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  var newlist = delete playlist.artistName;
  return newlist
  
}