import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js"

export default async function handler(req, res) {
    if (req.method == "DELETE") {
        try {
            await deleteTicket(req.query)
        } catch (e) {
            if (e instanceof TypeError) {
                return res.status(400).send("Incorrect trainId provided");
            } else {
                return res.status(500).send("Unable to delete ticket");
            }
        }
        return res.status(200).send("Success")
    }
}