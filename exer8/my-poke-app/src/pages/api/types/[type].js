const typesURL = "https://pokeapi.co/api/v2/type/"
const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

async function compileTypeData(type) {
    
    const typeResponse = await fetch(typesURL);
    const typeData = await typeResponse.json();
    const typeList = typeData.results;
    let found = false;
    let foundURL;
    for (let i = 0; i < typeList.length; i++) {
        if (typeList[i].name === type) {
            found = true;
            foundURL = typeList[i].url;
        }
    }
    if (!found) {
        return -1;
    }
    const res = await fetch(foundURL);
    const dat = await res.json();
    const pokeNames = dat.pokemon.map((d) => {
        return d.pokemon.name;
    })
    return pokeNames;
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        const data = await compileTypeData(req.query.type);
        if (data === -1) {
            res.status(400).json({status: "Invalid Type!"});
        }
        res.status(200).json({ data });
    } else {
        res.status(500).json({status: "Invalid Method"});
    }
  
}