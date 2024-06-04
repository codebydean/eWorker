const exprees = require('express')
const WorkProgram = require('../model/WorkPrograms.model.js')
const router = exprees.Router()

//GET every WorkProgram
router.get("/", async (req, res) => {
    try {
        const WorkPrograms = await WorkProgram.find({});
        res.status(200).json(WorkPrograms);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//GET specific WorkProgram
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const WorkPrograms = await WorkProgram.findById(id);
        res.status(200).json(WorkPrograms);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//POST (create) WorkProgram
router.post("/", async (req, res) => {
    try {
        const WorkPrograms = await WorkProgram.create(req.body)
        res.status(200).json(WorkPrograms)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//PUT (update) specific WorkProgram
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const WorkPrograms = await WorkProgram.findByIdAndUpdate(id, req.body)

        if (!WorkPrograms) {
            return res.status(404).json({ message: "WorkProgram not found" })
        }

        const updatedWorkPrograms = await WorkProgram.findById(id);
        res.status(200).json(updatedWorkPrograms)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//DELETE specific WorkProgram
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const WorkPrograms = await WorkProgram.findByIdAndDelete(id)

        if (!WorkPrograms) {
            return res.status(404).json({ message: "WorkProgram not found" })
        }

        res.status(200).json({ message: "WorkProgram deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router