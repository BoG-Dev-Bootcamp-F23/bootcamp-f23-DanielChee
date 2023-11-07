import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser.js"

export default async function handler(req, res) {
    if (req.method == "PATCH") {
        try {
            await updateTicketByUser(req.body)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        return res.status(200).send("Success")
    }
}