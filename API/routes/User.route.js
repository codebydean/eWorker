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

//GET specific User by email
router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const Users = await User.findOne({email : email});
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
                res.send(Status = "Success")
            } else {
                res.send(Status = "No user")
            }
        } else {
            res.json("No user")
        }
    })
})

//Register User config 
router.post("/register",async (req,res) =>{
    const {email} = req.body;
    
    await  User.findOne({email : email})
        .then(existedUser => {
            if(!existedUser ) {
               User.create(req.body)
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
router.put('/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const defEmail = req.body.email
        const Users = await User.findOne({email : email})

        if (!Users) {
            return res.status(404).json({ message: "User not found" })
        }

        const newValues = {$set : req.body }
        await User.updateOne({email : email}, newValues);
        const updatedUser = await User.findOne({email : defEmail})
        res.status(200).json(updatedUser)
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