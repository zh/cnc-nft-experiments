import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';

// Our voting contract.
const voteModule = sdk.getVoteModule(
  '0x6eA03013db6331A45E89b22349a48e5c0db0503d'
);

// Our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  '0x19aF86C219C60551E11a18D2256d2ce9548E3A03'
);

(async () => {
  try {
    const amount = 2_000;
    // Create proposal to transfer ourselves 6,900 tokens for being awesome.
    await voteModule.propose(
      'Should the DAO transfer ' +
        amount +
        ' tokens from the treasury to ' +
        process.env.WALLET_ADDRESS +
        ' for being awesome?',
      [
        {
          // Again, we're sending ourselves 0 ETH. Just sending our own token.
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            // We're doing a transfer from the treasury to our wallet.
            'transfer',
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),

          toAddress: tokenModule.address,
        },
      ]
    );

    console.log('Successfully created proposal for reward.');
  } catch (error) {
    console.error('Failed to create the proposal: ', error);
  }
})();
