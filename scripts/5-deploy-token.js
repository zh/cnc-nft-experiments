import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'Crypto and Code Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'CCT',
    });
    console.log(
      'Successfully deployed token module, address:',
      tokenModule.address
    );
  } catch (error) {
    console.error('Failed to deploy token module: ', error);
  }
})();
