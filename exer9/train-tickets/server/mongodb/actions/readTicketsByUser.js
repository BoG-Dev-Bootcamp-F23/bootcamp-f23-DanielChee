import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import mongoose from "mongoose";

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { userId } = data;
        return await Ticket.find({userId : userId }).exec();
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read userId.")
    }
}