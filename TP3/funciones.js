$(document).ready(function() {
  getRandomUser();
  getRickAndMortyCharacter();
});

function getRandomUser() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      var user = data.results[0];
      var picture = user.picture.large;
      var gender = user.gender;

      $('#random-user-picture').attr('src', picture);
      $('#random-user-gender').text('Género: ' + gender);
    }
  });
}

function getRickAndMortyCharacter() {
  var characterId = Math.floor(Math.random() * 671) + 1; // Genera un número aleatorio entre 1 y 671 (número total de personajes en la API)

  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/' + characterId,
    dataType: 'json',
    success: function(data) {
      var characterName = data.name;
      var picture = data.image;
      var gender = data.gender;

      $('#rick-and-morty-picture').attr('src', picture);
      $('#rick-and-morty-gender').text('Género: ' + gender);

      compareGenders(gender);
    }
  });
}

function compareGenders(gender) {
  var randomUserGender = $('#random-user-gender').text().split(': ')[1];

  if (randomUserGender.toLowerCase() === gender.toLowerCase()) {
    $('#random-user-status').attr('src', 'tick.png');
    $('#rick-and-morty-status').attr('src', 'tick.png');
  } else {
    $('#random-user-status').attr('src', 'cross.png');
    $('#rick-and-morty-status').attr('src', 'cross.png');
  }
}

  