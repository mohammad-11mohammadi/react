import Movie from "./Movie.jsx";
export default function Movies() {
  const movies = [
    { name: "Prancess", imgUrl: "../assets/prancess.png", Episode: 12 },
    { name: "Numbers", imgUrl: "../assets/numbers.png", Episode: 18 },
    { name: "Whikiki", imgUrl: "../assets/whikiki.png", Episode: 22 },
  ];
  return (
    <div className="h-screen w-full flex justify-between flex-wrap gap-1.5">
      {movies.map((movie) => {
        <Movie
          key={movie.name}
          name={movie.name}
          imgUrl={movie.imgUrl}
          ep={movie.Episode}
        />;
      })}
    </div>
  );
}
