import {Router} from 'express';

const giftRouter = Router();

giftRouter.get('/read', (req,res) =>{
  let test = req.query;

  console.log(test);
})

giftRouter.post('/create', (req, res)=>{
  let test = req.body;

  res.json(test);
})

giftRouter.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send ({
    message : "Update on "+ id +" successful."
  })
})

giftRouter.delete('/delete/:id', (req,res) => {
  res.send("DELETE request for " + req.params.id)
})

export default giftRouter;