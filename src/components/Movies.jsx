import Movie from "./Movie.jsx";
export default function Movies() {
  const movies = [
    { name: "Prancess", Episode: 12 },
    { name: "Numbers", Episode: 18 },
    { name: "Whikiki", Episode: 22 },
  ];
  return (
    <div className="h-screen w-full flex justify-between flex-wrap gap-1.5">
      {movies.map((movie) => {
        <Movie key={movie.name} name={movie.name} ep={movie.Episode} />;
      })}
    </div>
  );
}
