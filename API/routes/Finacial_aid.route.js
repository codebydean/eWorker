const exprees = require('express')
const Finacial_aid = require('../model/Finacial_aid.model.js')
const router = exprees.Router()

//GET every Finacial_aid
router.get("/", async (req, res) => {
    try {
        const Finacial_aids = await Finacial_aid.find({});
        res.status(200).json(Finacial_aids);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//GET specific Finacial_aid
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Finacial_aids = await Finacial_aid.findById(id);
        res.status(200).json(Finacial_aids);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//POST (create) Finacial_aid
router.post("/", async (req, res) => {
    try {
        const Finacial_aids = await Finacial_aid.create(req.body)
        res.status(200).json(Finacial_aids)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//PUT (update) specific Finacial_aid
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Finacial_aids = await Finacial_aid.findByIdAndUpdate(id, req.body)

        if (!Finacial_aids) {
            return res.status(404).json({ message: "Finacial_aid not found" })
        }

        const updatedFinacial_aids = await Finacial_aid.findById(id);
        res.status(200).json(updatedFinacial_aids)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//DELETE specific Finacial_aid
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Finacial_aids = await Finacial_aid.findByIdAndDelete(id)

        if (!Finacial_aids) {
            return res.status(404).json({ message: "Finacial_aid not found" })
        }

        res.status(200).json({ message: "Finacial_aid deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router