const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        maxLength:240
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

messageSchema.pre('remove', async function(next){
    //find a user
    try{
        let user = await User.findById(this.userId);
        // remove that id of the message from their messages list 
        user.message.remove(this.id);
        //save that user
        await user.save()
        // return next
        return next();
    } catch(e) {
        // return next
        return next(err);

    }

    


});

const Message = mongoose.model("Message",messageSchema)
module.export = Message;

