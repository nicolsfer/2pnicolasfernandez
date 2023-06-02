function mifuncion(pers) {
  const url = "https://rickandmortyapi.com/api/character/"
  fetch(url + pers)
    .then(function (Response) {
      return Response.json()
    })
    .then(function (data) {
      let element = document.getElementById("texto")
      element.innerHTML = ` 
            <p>Nombre: ${data.name}</p>
            <p><img src="${data.image}"></p>
            <p>Estado: ${data.status}</p>
            <p>Especie: ${data.species}</p>
            <p>Episodios: ${data.episode.length}</p>
          `
    });
}
