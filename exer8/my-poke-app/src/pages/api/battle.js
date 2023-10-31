const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

async function battlePokemon(pokemon1, pokemon2) {
    const response1 = await fetch(pokeURL + pokemon1);
    if (!response1.ok) {
        return -1;
    }
    const data1 = await response1.json();
    const response2 = await fetch(pokeURL + pokemon2);
    if (!response2.ok) {
        return -1;
    }
    const data2 = await response2.json();
    if (data1.stats[0].base_stat > data2.stats[0].base_stat) {
        return {outcome: pokemon1 + " wins"}
    } else if (data1.stats[0].base_stat < data2.stats[0].base_stat) {
        return {outcome: pokemon2 + " wins"}
    } else {
        return {outcome: "draw"}
    }
}
export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = await battlePokemon(req.body.pokemon1, req.body.pokemon2);
        if (data === -1) {
            res.status(400).json({status: "Invalid Data"});
        }
        res.status(200).json({ data });
    } else {
        res.status(500).json({status: "Invalid Method"});
    }
  
}