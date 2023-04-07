import mongoose from "mongoose";
const schema = new mongoose.Schema({
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
    handle: String,
    tuit: String,
}, {
    collection: "tuits",
});

export default schema;