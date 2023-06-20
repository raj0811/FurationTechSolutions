const Item = require('../models/items')

// Add item to database
module.exports.addItem=async(req,res)=>{
    try{

        const {name , description}=req.body;
        const userId = req.user.userId;
        


        const item=new Item({name, description,user: userId});
        await item.save()

        res.json({item})

    }catch(error){
        res.send(error)
    }
}


//  Show All items 
module.exports.showItems = async (req, res) => {
    try {
      const userId = req.user.userId;
      
  
      const page = parseInt(req.query.page) || 1; // Current page number, default is 1
      const limit = parseInt(req.query.limit) || 10; // Number of items per page, default is 10
  
      const startIndex = (page - 1) * limit; // Calculate the starting index of items for the current page
  
      const itemsCount = await Item.countDocuments({ user: userId }); // Total number of items for the user
  
      const totalPages = Math.ceil(itemsCount / limit); // Calculate the total number of pages
  
      const items = await Item.find({ user: userId })
        .skip(startIndex)
        .limit(limit);
  
      if (items.length === 0) {
        return res.send('No items available');
      }
  
      res.send({
        items,
        currentPage: page,
        totalPages,
      });
    } catch (error) {
      res.send(error);
    }
  };
  

//  show one specific item by id
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

// Update item
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