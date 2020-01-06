let users = {
  1: {
    id: 1,
    username: 'Robin Wieruch',
  },
  2: {
    id: 2,
    username: 'Dave Davids',
  },
};

let giftcards = [
  {
    id: "giftcard1bono",
    provider: "ohgiftcard",
    balance: 159000,
    _self: {
      href: "/giftcards/giftcards/1"
    },
    clientId: 1
  },
  {
    id: "giftcard2navidad",
    provider: "ohgiftcard",
    balance: 30000,
    _self: {
      href: "/giftcards/giftcards/2"
    },
    clientId: 2
  }
]

let transactions = [
  {
    "cardId": "giftcard1bono",
    "id": "123456",
    "_self": {
      "href": "/giftcards/20/transactions/123456"
    }
  }
]

export default {
  users,
  giftcards,
  transactions
};

