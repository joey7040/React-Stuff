const db = require('../models');


exports.createMessage = async function(req,res,next){
    try {
        let message = await db.Message.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await db.User.findByd(req.params.id)
        foundUser.messages.push(message.id);
        await foundUser.save()
        let foundMessage = db.Message.findById(message._id).populate("user",{
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundMessage)

    } catch(e){
        return next(err);
    }
};
exports.getMessage = async function(req,res,next){
    try{
        let message = await db.message.find(req.param.message_id);
        return res.status(200).json(message)
    } catch(e){
        return next(e)
    }
};
exports.deleteMessage = async function(req,res,next){
    try{
        let foundmessage = await db.message.findById(req.params.message_id);
        await foundmessage.remove()
        return res.status(200).json(message)
    } catch(e){
        return next(e)
    }

};