const {Pirates} = require("../models/pirate.model")

module.exports.createOne=(req,res)=>{
    const {name,url,chest,phrase,crew,isPegLeg,isEyePatch,isHookHand} = req.body
    Pirates.create({
        name,url,chest,phrase,crew,isPegLeg,isEyePatch,isHookHand
    })
        .then(pirate=>res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.getAll=(req,res)=>{
    Pirates.find({}).sort({name:1})
        .then(pirates=>res.json(pirates))
        .catch(err => res.json(err))
}

module.exports.getOne=(req,res)=>{
    Pirates.findOne({_id:req.params.id})
        .then(pirate=>res.json(pirate))
        .catch(err => res.json(err))
}

module.exports.updateOne=(req,res)=>{
    Pirates.updateOne({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then(pirate=>res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne=(req,res)=>{
    Pirates.deleteOne({_id:req.params.id})
        .then(pirate=>res.json(pirate))
        .catch(err => res.json(err))
}