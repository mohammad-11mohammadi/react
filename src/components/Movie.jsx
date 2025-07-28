export default function Movie({ name, ep }) {
  return (
    <div className="w-[40%] h-fit p-4 bg-gray-500 text-white text-center">
      <h1>{name}</h1>
      <p>episode: {ep}</p>
    </div>
  );
}
