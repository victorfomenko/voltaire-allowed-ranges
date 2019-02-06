'use strict';

const Big = require('big.js');

const limits = {
  'BTC-BCH': {
    limit: {
      buy: {
        quantity: { min: Big(0.00001), max: Big(1000) },
        price: { min: Big(0.001), max: Big(1000) }
      },
      sell: {
        quantity: { min: Big(0.00001), max: Big(1000) },
        price: { min: Big(0.00001), max: Big(1000) }
      }
    },
    market: {
      buy: { min: Big(0.0001), max: Big(100000) },
      sell: { min: Big(0.00001), max: Big(10000) }
    }
  }
};

limits['BSV-BCH'] = limits['ETH-BCH'] = limits['LTC-BCH'] = limits['BTC-BCH'];

module.exports = limits;
