const id = Math.floor(Math.random() * 1017) + 1;
const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

async function compileData(index) {
  const response = await fetch(pokeURL + index);
  const data = await response.json();
  const typesArray = [];
  data.types.forEach((type) => {
    typesArray.push(type.type.name);
  })
  const dataObj = {
    "pokemonName": data.name,
    "sprite": data.sprites.front_default,
    "types": typesArray
  }
  return dataObj;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await compileData(Math.floor(Math.random() * 1017) + 1);
    res.status(200).json({ data });
  } else {
    res.status(500).json({status: "Invalid Method"});
  }
  
}