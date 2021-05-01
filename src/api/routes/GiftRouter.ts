import {Router} from 'express';

const giftRouter = Router();

giftRouter.get('/gifts', (req, res) =>{
  let test = req.query;

  console.log(test);
})

giftRouter.get('/gifts/:id', (req, res) =>{
  let test = req.query;

  console.log(test);
})


giftRouter.post('/gifts/create', (req, res)=>{
  let test = req.body;

  res.json(test);
})

giftRouter.put("/gifts/:id", (req, res) => {
  let id = req.params.id;
  res.send ({
    message : "Update on "+ id +" successful."
  })
})

giftRouter.delete('/gifts/:id', (req, res) => {
  res.send("DELETE request for " + req.params.id)
})

export default giftRouter;