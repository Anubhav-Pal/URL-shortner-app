import mongoose from "mongoose";
import shortid from "shortid";

const urlSchema = new mongoose.Schema({
    long: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => shortid.generate()
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})


const shortURL = new mongoose.model('shortURL', urlSchema)

export default shortURL 