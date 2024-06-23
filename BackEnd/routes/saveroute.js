const Save = require("../models/Save");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const newSave = new Save(req.body);
    try {
        const savedSave = await newSave.save();
        res.status(200).json(savedSave);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;