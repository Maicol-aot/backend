const express = require("express");
const userSchema = require("../models/User");
const router=express.Router();

//Creacion del usuario
router.post('/usuario', (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports = router;