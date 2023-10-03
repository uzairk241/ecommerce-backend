const express = require("express");
const router=express.Router()

router.route("/user").post((req,res)=>{
    res.status(200).json({"message":"hello"})
});


module.exports = router;
