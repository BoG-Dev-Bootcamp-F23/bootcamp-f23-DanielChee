const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

async function compileData(index) {
    const response = await fetch(pokeURL + index);
    if (!response.ok) {
        return -1;
    }
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
        const data = await compileData(req.query.name);
        if (data === -1) {
            res.status(400).json({status: "Invalid Data"});
        }
        res.status(200).json({ data });
    } else {
        res.status(500).json({status: "Invalid Method"});
    }
  
}