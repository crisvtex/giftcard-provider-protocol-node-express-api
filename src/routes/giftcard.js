import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

/*  API Endpoint: GET Get All GiftCard */
router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.giftcards)); 
});

/*  API Endpoint: GET Get GiftCard by ID
    https://documenter.getpostman.com/view/5517284/S17qU9oo?version=latest#7c5835bd-33cc-4560-8c6e-c20e8482e852 */
router.get('/:giftcardId', (req, res) => {

  /* Lógica de negocio... */

  const giftcards = req.context.models.giftcards;
  const giftcardId = req.params.giftcardId;
  const resultArray= giftcards.filter(giftcard=>giftcard.id==giftcardId);
  
  return res.json(resultArray);
});

/*  [INCOMPLETO] API Endpoint: POST Create GiftCard
    https://documenter.getpostman.com/view/5517284/S17qU9oo?version=latest#1e698043-7bcf-429f-9a67-c46ab09ce8de */
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

/*  API Endpoint: POST List All GiftCards
    https://documenter.getpostman.com/view/5517284/S17qU9oo?version=latest#5554781f-e20a-4637-beb1-b8a14e745b14 */
router.post('/_search', (req, res) => {

  /* Lógica de negocio... */

  const giftcards = req.context.models.giftcards;
  const clientId = parseInt(req.body.client.id);
  const resultArray= giftcards.filter(giftcard=>giftcard.clientId==clientId);
  
  return res.json(resultArray);
});


/*  API Endpoint: POST Create GiftCard Transaction
    https://documenter.getpostman.com/view/5517284/S17qU9oo?version=latest#73387688-c21b-4e42-8c8b-47e2aa6e0b28 */
router.post('/:giftcardId/transactions', (req, res) => {
  const transactions = req.context.models.transactions;
  
  /* Lógica de negocio... */
  
  if(transactions[0].cardId==req.params.giftcardId) {
    return res.json(transactions);
  } else {
    return res.json({
      error: "Transaccion no realizada"
    })
  }
});


/*  API Endpoint: DELETE Delete Giftcard */
router.delete('/:giftcardId', (req, res) => {
  const {
    [req.params.giftcard.id]: giftcard,
    ...othergiftcards
  } = req.context.models.giftcards;

  req.context.models.giftcards = othergiftcards;

  return res.send(giftcard);
});

export default router;
