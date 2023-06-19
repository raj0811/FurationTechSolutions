const Item = require('../models/items')

module.exports.addItem=async(req,res)=>{
    try{

        const {name , description}=req.body;
        const userId = req.user.userId;
        // const userId = req.user._id;
        console.log(userId);


        const item=new Item({name, description,user: userId});
        await item.save()

        res.json({item})

    }catch(error){
        res.send(error)
    }
}


module.exports.showItems=async(req,res)=>{
    try{
        const userId=req.user.userId
        console.log(userId);

        const items= await Item.find({ user: userId })

        if (items.length === 0) {
            return res.send('No items available');
          }

        res.send(items)

    }catch(error){
        res.send(error)
    }
}