import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    let newTuit = req.body;
    const currentUser = {
        userName: "NASA",
        handle: "@nasa",
        image: "../images/nasa-logo.jpeg",
    };

    const templateTuit = {
        ...currentUser,
        topic: "Space",
        time: "2h",
        liked: false,
        replies: 0,
        retuits: 0,
        likes: 0,
        dislikes: 0
    }
    newTuit._id = (new Date()).getTime() + "";
    newTuit = {...newTuit, ...templateTuit};
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitIdToUpdate);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    console.log("before", tuits);
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    console.log("after", tuits);
    res.sendStatus(200);
}

export default (app) => {
    app.post("/api/tuits", createTuit);
    app.get("/api/tuits", findTuits);
    app.put("/api/tuits/:tid", updateTuit);
    app.delete("/api/tuits/:tid", deleteTuit);
}