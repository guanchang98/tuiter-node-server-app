import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {
    collections: tuits,
});

export default schema;