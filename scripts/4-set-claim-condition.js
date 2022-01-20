import sdk from './1-initialize-sdk.js';

const bundleDrop = sdk.getBundleDropModule(
  '0xb8641b496ff0Eb238e271923C5a25fd6e1A66329'
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 1000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      'Successfully set claim condition on bundle drop:',
      bundleDrop.address
    );
  } catch (error) {
    console.error('Failed to set claim condition', error);
  }
})();
