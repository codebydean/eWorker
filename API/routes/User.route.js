const exprees = require('express')
const User = require('../model/Users.model.js');
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

//Login user config
router.post("/login",async (req,res) =>{
    const {email,password} = req.body;
    User.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("No user")
            }
        } else {
            res.json("No user")
        }
    })
})

//Register User config

//We can talk about how the check for connection will be 
router.post("/register",async (req,res) =>{
    const {email} = req.body;
    
        User.findOne({email : email})
        .then(existedUser => {
            if(!existedUser ) {
                const new_user = User.create(req.body)
                res.status(200).json("new user")
            }
            else if(existedUser){
                res.json("exist").status(300)
            }
        })
        //const existed_user_username = await User.findOne({username : username})
        
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