const mongoose=require("mongoose")

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    url:{
        type:String,
        required:[true, "image URL is required"]
    },
    chest:{
        type:Number,
        required:[true,"Number of Treasure Chest is required"]
    },
    phrase:{
        type:String,
        required:[true,"Phrase is required"]
    },
    crew:{
        type:String,
        required:[true,"Crew Position is required"]
    },
    isPegLeg:{
        type:Boolean,
        default:true
    },
    isEyePatch:{
        type:Boolean,
        default:true
    },
    isHookHand:{
        type:Boolean,
        default:true
    }



},{timestamps:true})

module.exports.Pirates = mongoose.model("Pirates",PirateSchema)