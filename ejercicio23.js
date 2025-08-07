const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
function classifyByDuration(listMovies) {
  const peliculasPequeña = [];
  const peliculasMediana = [];
  const peliculasLarga = [];
  for (const movie of listMovies) {
    switch (true) {
      case movie.durationInMinutes<100 :
        peliculasPequeña.push(movie);
        break;
      case movie.durationInMinutes>=100 && movie.durationInMinutes<200 :
        peliculasMediana.push(movie);
        break;
      case movie.durationInMinutes>=200 :
        peliculasLarga.push(movie);
        break;
      default:
        console.log("Duración no válida");
        break;
    }
  }
  console.log("Películas de duración pequeña:", peliculasPequeña);
  console.log("Películas de duración mediana:", peliculasMediana);
  console.log("Películas de duración larga:", peliculasLarga);
}
classifyByDuration(movies);