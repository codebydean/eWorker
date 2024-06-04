const exprees = require('express')
const TrainCource = require('../model/TrainCources.model')
const router = exprees.Router()

//GET every TrainCource
router.get("/", async (req, res) => {
    try {
        const TrainCources = await TrainCource.find({});
        res.status(200).json(TrainCources);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//GET specific TrainCource
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const TrainCources = await TrainCource.findById(id);
        res.status(200).json(TrainCources);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//POST (create) TrainCource
router.post("/", async (req, res) => {
    try {
        const TrainCources = await TrainCource.create(req.body)
        res.status(200).json(TrainCources)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//PUT (update) specific TrainCource
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const TrainCources = await TrainCource.findByIdAndUpdate(id, req.body)

        if (!TrainCources) {
            return res.status(404).json({ message: "TrainCource not found" })
        }

        const updatedTrainCources = await TrainCource.findById(id);
        res.status(200).json(updatedTrainCources)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//DELETE specific TrainCource
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const TrainCources = await TrainCource.findByIdAndDelete(id)

        if (!TrainCources) {
            return res.status(404).json({ message: "TrainCource not found" })
        }

        res.status(200).json({ message: "TrainCource deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router