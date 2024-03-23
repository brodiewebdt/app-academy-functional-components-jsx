import bulbasaur from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  return (
    <div className="flex">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={bulbasaur}
        alt="Bulbasaur"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "100vw",
          marginBlock: "3rem",
        }}
      />
      <h2>
        Bulbasaur's type is{" "}
        <span className="bg-dark">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="bg-light">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
