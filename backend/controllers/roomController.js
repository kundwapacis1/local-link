import Room from "../models/room.js";

//Get all rooms
export const getRooms = async (req, res) =>{
    try {
        const rooms = (await Room.find()).toSorted({ createdAt: -1 });
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
// Create a new room
export const createRoom = async (req,res) =>{
    const { name } =req.body;
     try {
        const existingRoom = await Room.findOne({ name});
         if (existingRoom) return res.status(400).json({ message: "Room already exists"});

         const room = await Room.create({ name });
         res.status(201).json(room);
     } catch (error) {
        res.status(500).json({ message: "server Error" });
     }
};