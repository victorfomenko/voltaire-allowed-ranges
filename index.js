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
  },
  'SPICE-BCH': {
    limit: {
      buy: {
        quantity: { min: Big(1), max: Big(1000000) },
        price: { min: Big(0.00000001), max: Big(10) }
      },
      sell: {
        quantity: { min: Big(1), max: Big(1000000) },
        price: { min: Big(0.00000001), max: Big(10) }
      }
    },
    market: {
      buy: { min: Big(0.000001), max: Big(100) },
      sell: { min: Big(1), max: Big(1000000) }
    }
  }
};

limits['BSV-BCH'] = limits['BTC-BCH'];
limits['ETH-BCH'] = limits['BTC-BCH'];
limits['LTC-BCH'] = limits['BTC-BCH'];

module.exports = limits;
