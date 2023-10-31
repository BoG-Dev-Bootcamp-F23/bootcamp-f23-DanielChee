const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/"
let chainURL = "https://pokeapi.co/api/v2/evolution-chain/"

async function defineChain(pokemonName) {
    const response = await fetch(speciesURL + pokemonName);
    if (!response.ok) {
        return -1;
    }
    const data = await response.json();
    chainURL = data.evolution_chain.url;
    const respons = await fetch(chainURL);
    const dat = await respons.json();
    if (dat.chain.species.name === pokemonName) {
        if (dat.chain.evolves_to.length !== 0) {
            return {"next_evolution": dat.chain.evolves_to[0].species.name,
                "curr_stage" : 1
            };
        } else {
            return {"next_evolution": "none",
                "curr_stage" : 1
            };
        }
    } else if (dat.chain.evolves_to[0].species.name === pokemonName) {
        if (dat.chain.evolves_to[0].evolves_to.length !== 0) {
            return {
                "next_evolution": dat.chain.evolves_to[0].evolves_to[0].species.name,
                "curr_stage" : 2
            };
        } else {
            return {
                "next_evolution": "none",
                "curr_stage" : 2
            };
        }
    } else {
        return {
                "next_evolution": "none",
                "curr_stage" : 3
            };
    }
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        const evolution = await defineChain(req.query.name);
        if (evolution === -1) {
            res.status(400).json({status: "Invalid Data"});
        }
        res.status(200).json({ evolution });
    } else {
        res.status(500).json({status: "Invalid Method"});
    }
  
}
