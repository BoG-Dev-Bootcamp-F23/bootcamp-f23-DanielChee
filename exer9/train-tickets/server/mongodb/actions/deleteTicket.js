import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB()
        const { identifier } = data
        const doesThisExist = await Ticket.findByIdAndDelete(identifier)
        if (!doesThisExist) {
            throw new Error("ID");
        }
    } catch (e) {
        if (e.name === "ID") {
            throw new TypeError("Incorrect ticket ID");
        } else {
            throw new Error("Unable to delete ticket.");
        }
    }
}