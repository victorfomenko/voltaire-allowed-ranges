# voltaire-allowed-ranges

Allowed ranges for order prices and quantities:

| Product   | Type   | Side | Field      | Range             |
| --------- | ------ | ---- | ---------- | ----------------- |
| BTC-BCH   | Limit  | Buy  | `quantity` | >=0.00001 <=1000  |
| BTC-BCH   | Limit  | Buy  | `price`    | >=0.001 <=1000    |
| BTC-BCH   | Limit  | Sell | `quantity` | >=0.00001 <=1000  |
| BTC-BCH   | Limit  | Sell | `price`    | >=0.00001 <=1000  |
| BTC-BCH   | Market | Buy  | `quantity` | >=0.0001 <=100000 |
| BTC-BCH   | Market | Sell | `quantity` | >=0.00001 <=10000 |
| BSV-BCH   | Limit  | Buy  | `quantity` | >=0.00001 <=1000  |
| BSV-BCH   | Limit  | Buy  | `price`    | >=0.001 <=1000    |
| BSV-BCH   | Limit  | Sell | `quantity` | >=0.00001 <=1000  |
| BSV-BCH   | Limit  | Sell | `price`    | >=0.00001 <=1000  |
| BSV-BCH   | Market | Buy  | `quantity` | >=0.0001 <=100000 |
| BSV-BCH   | Market | Sell | `quantity` | >=0.00001 <=10000 |
| ETH-BCH   | Limit  | Buy  | `quantity` | >=0.00001 <=1000  |
| ETH-BCH   | Limit  | Buy  | `price`    | >=0.001 <=1000    |
| ETH-BCH   | Limit  | Sell | `quantity` | >=0.00001 <=1000  |
| ETH-BCH   | Limit  | Sell | `price`    | >=0.00001 <=1000  |
| ETH-BCH   | Market | Buy  | `quantity` | >=0.0001 <=100000 |
| ETH-BCH   | Market | Sell | `quantity` | >=0.00001 <=10000 |
| LTC-BCH   | Limit  | Buy  | `quantity` | >=0.00001 <=1000  |
| LTC-BCH   | Limit  | Buy  | `price`    | >=0.001 <=1000    |
| LTC-BCH   | Limit  | Sell | `quantity` | >=0.00001 <=1000  |
| LTC-BCH   | Limit  | Sell | `price`    | >=0.00001 <=1000  |
| LTC-BCH   | Market | Buy  | `quantity` | >=0.0001 <=100000 |
| LTC-BCH   | Market | Sell | `quantity` | >=0.00001 <=10000 |
| SPICE-BCH | Limit  | Buy  | `quantity` | >=1 <=1000000     |
| SPICE-BCH | Limit  | Buy  | `price`    | >=0.00000001 <=10 |
| SPICE-BCH | Limit  | Sell | `quantity` | >=1 <=1000000     |
| SPICE-BCH | Limit  | Sell | `price`    | >=0.00000001 <=10 |
| SPICE-BCH | Market | Buy  | `quantity` | >=0.000001 <=100  |
| SPICE-BCH | Market | Sell | `quantity` | >=1 <=1000000     |
| DROP-BCH  | Limit  | Buy  | `quantity` | >=0.1 <=1000000   |
| DROP-BCH  | Limit  | Buy  | `price`    | >=0.0000001 <=10  |
| DROP-BCH  | Limit  | Sell | `quantity` | >=0.1 <=1000000   |
| DROP-BCH  | Limit  | Sell | `price`    | >=0.00000001 <=10 |
| DROP-BCH  | Market | Buy  | `quantity` | >=0.000001 <=100  |
| DROP-BCH  | Market | Sell | `quantity` | >=0.1 <=1000000   |
| SAI-BCH   | Limit  | Buy  | `quantity` | >=0.1 <=1000000   |
| SAI-BCH   | Limit  | Buy  | `price`    | >=0.0000001 <=10  |
| SAI-BCH   | Limit  | Sell | `quantity` | >=0.1 <=1000000   |
| SAI-BCH   | Limit  | Sell | `price`    | >=0.00000001 <=10 |
| SAI-BCH   | Market | Buy  | `quantity` | >=0.000001 <=100  |
| SAI-BCH   | Market | Sell | `quantity` | >=0.1 <=1000000   |
| BCH-USDH  | Limit  | Buy  | `quantity` | >=0.01 <=1000     |
| BCH-USDH  | Limit  | Buy  | `price`    | >=1 <=100000      |
| BCH-USDH  | Limit  | Sell | `quantity` | >=0.00001 <=1000  |
| BCH-USDH  | Limit  | Sell | `price`    | >=0.01 <=100000   |
| BCH-USDH  | Market | Buy  | `quantity` | >=0.01 <=100000   |
| BCH-USDH  | Market | Sell | `quantity` | >=0.00001 <=10000 |
