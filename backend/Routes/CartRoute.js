const express=require('express');

const {cartFeature,reminder, fetchReminder,deleteNote}=require('../Controller/CartController.js');


const router=express.Router();

router.post("/cart",cartFeature);


router.post("/addreminder",reminder);
router.post("/fetchreminder",fetchReminder);

router.post("/deletereminder",deleteNote);

module.exports=router;