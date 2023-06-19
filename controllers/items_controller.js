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

module.exports.selectItem=async(req,res)=>{
    try{
        const itemId=req.params.id

        const item=await Item.findById(itemId)
        if(!item){
            res.send('No items available')
        }

        res.send(item)
    }catch(error){
        res.send(error)
    }
}

module.exports.updateItem=async(req,res)=>{
    try{
        const itemId=req.params.id
        const {name, description}=req.body
        const update={
            name,
            description
        }
        
        const updatedItem = await Item.findByIdAndUpdate(itemId, update, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
          }
      
          res.json({ item: updatedItem });

    }catch(error){
        res.send(error)
    }
}

// delete item

module.exports.deleteItem=async(req,res)=>{
    try{
        const itemId=req.params.id

        const deleteItem = await Item.findByIdAndRemove(itemId);
       
        if (!deleteItem) {
            return res.status(404).json({ error: 'Item not found' });
          }

        res.send('item deleted')

    }catch(error){
        res.send(error)
    }
}