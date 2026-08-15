const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dns = require("dns");
const cors=require("cors")

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
])

const app = express();
app.use(cors())
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
         console.log("Database:", mongoose.connection.name);
    } catch (err) {
        console.error("MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};

connectDB();

const Note = require("./model/Note")

// Sample Data


// GET
app.get("/note", async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST
app.post("/note", async (req, res) => {
    try {
        const note = await Note.create(req.body)
        res.status(201).json(note)

        
    } catch (err) {

        res.status(500).json({ message: err.message })
    }

});

// PUT
app.put("/note/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                createdAt: req.body.createdAt
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json(note);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// PATCH
app.patch("/note/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json(note);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// DELETE
app.delete("/note/:id", async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.json("deleted successfully")
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});