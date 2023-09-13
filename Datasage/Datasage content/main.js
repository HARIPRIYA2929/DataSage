const express=require('express')
const { route } = require('express/lib/application')

const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/Contact');

const routes=express.Router()

//------Promises

routes.get("/",async (req,res) => {

   const details=await Detail.findOne({"_id":"6470f97b16f5bff5c826816b"})
   const slides = await Slider.find()
   //console.log(slides)
   
  // console.log(details)
  
const services=await Service.find()


    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
});

routes.get('/gallery',async(req,res) => {
    const details=await Detail.findOne({"_id":"6470f97b16f5bff5c826816b"})
    res.render("gallery",{
        details:details,
    });
});

//process contact form

//-----Promises

routes.post("/process-contact-form", async(request,response) => {
    console.log("form is submitted")
    console.log(request.body)
    //save the data to the database
    try{
     const data=await Contact.create(request.body)
     response.redirect("/")   
   

    }catch(e)
    {
    console.log(error)
    response.redirect("/")
    }
})

module.exports=routes;
