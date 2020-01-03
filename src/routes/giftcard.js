import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.giftcards)); 
});

router.get('/:giftcardId', (req, res) => {
  return res.send(req.context.models.giftcards[req.params.giftcardId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const giftcard = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.giftcards[id] = giftcard;

  return res.send(giftcard);
});

router.delete('/:giftcardId', (req, res) => {
  const {
    [req.params.giftcardId]: giftcard,
    ...othergiftcards
  } = req.context.models.giftcards;

  req.context.models.giftcards = othergiftcards;

  return res.send(giftcard);
});

export default router;
