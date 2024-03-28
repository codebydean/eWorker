const exprees = require('express')
const User = require('../model/Users.model.js')
const router = exprees.Router()

//GET every User
router.get("/", async (req, res) => {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//GET specific User
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Users = await User.findById(id);
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post("/login",async (req,res) =>{
    const {username,password} = req.body;
    User.findOne({username : username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No user exist")
        }
    })
})
//POST (create) User
router.post("/", async (req, res) => {
    try {
        const Users = await User.create(req.body)
        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//PUT (update) specific User
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Users = await User.findByIdAndUpdate(id, req.body)

        if (!Users) {
            return res.status(404).json({ message: "User not found" })
        }

        const updatedUsers = await User.findById(id);
        res.status(200).json(updatedUsers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//DELETE specific User
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const Users = await User.findByIdAndDelete(id)

        if (!Users) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router