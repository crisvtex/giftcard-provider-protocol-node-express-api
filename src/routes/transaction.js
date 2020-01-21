import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.transactions)); 
    //return res.send('funciona');
});

router.post('')


export default router;