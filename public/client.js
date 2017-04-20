console.log('test');

$(document).ready(docReady);

function docReady() {
  console.log('doc ready');

  //event listener
  $('#add-song').on('click', addSong);
}

// add Song function
function addSong() {
  console.log('in addSong');
  var songTitle = $('#song-title').val();
  console.log('songTitle ->', songTitle);

  var objectToSend = {
    name: songTitle
  };

  

  $('#song-list').append('<li>' + songTitle + '</li>');

  $.ajax({
    method: 'POST',
    url: '/',
    data: objectToSend,
    success: function(response) {
      console.log(response);
    }
  });
}
