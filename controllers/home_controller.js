module.exports.home=(req,res)=>{
    return res.send({
        connected : true,
        msg: "Successfully connected"
    })
}