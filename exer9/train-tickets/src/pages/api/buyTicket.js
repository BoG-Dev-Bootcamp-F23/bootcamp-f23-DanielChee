import createTicket from "../../../server/mongodb/actions/createTicket.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        
        try {
            const userID = new mongoose.Types.ObjectId(req.body.userID);
            await createTicket({ ...req.body, userID });
            return res.status(200).send("Success");
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}
