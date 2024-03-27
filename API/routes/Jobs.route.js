const exprees = require('express')
const Job = require('../model/Jobs.model.js')
const router = exprees.Router()

//GET every Job
router.get("/", async (req, res) => {
    try {
        const Jobs = await Job.find({});
        res.status(200).json(Jobs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//GET specific Job
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Jobs = await Job.findById(id);
        res.status(200).json(Jobs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//POST (create) Job
router.post("/", async (req, res) => {
    try {
        const Jobs = await Job.create(req.body)
        res.status(200).json(Jobs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//PUT (update) specific Job
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Jobs = await Job.findByIdAndUpdate(id, req.body)

        if (!Jobs) {
            return res.status(404).json({ message: "Job not found" })
        }

        const updatedJobs = await Job.findById(id);
        res.status(200).json(updatedJobs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//DELETE specific Job
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Jobs = await Job.findByIdAndDelete(id)

        if (!Jobs) {
            return res.status(404).json({ message: "Job not found" })
        }

        res.status(200).json({ message: "Job deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router