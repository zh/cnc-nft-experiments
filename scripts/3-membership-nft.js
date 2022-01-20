import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0xb8641b496ff0Eb238e271923C5a25fd6e1A66329'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'CnC Member',
        description: 'This NFT will give you access to Crypto and Code DAO.',
        image: readFileSync('scripts/assets/cnc_nft.png'),
      },
    ]);
    console.log('Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
