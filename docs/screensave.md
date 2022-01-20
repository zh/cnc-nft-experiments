# Deployment Screen Log

```sh
$ node ./scripts/1-initialize-sdk.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
```

```sh
$ node ./scripts/2-membership-metadata.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
Successfully deployed bundleDrop module, address: 0xb8641b496ff0Eb238e271923C5a25fd6e1A66329
bundleDrop metadata: {
  metadata: {
    name: 'CnC DAO Membership',
    description: 'Crypto and Code DAO.',
    image: 'https://cloudflare-ipfs.com/ipfs/QmdZowxGusyRedrALy4erxJ3PyEiePEYG6yxmorU5Mg9Ya/0',
    primary_sale_recipient_address: '0x0000000000000000000000000000000000000000'
  },
  address: '0xb8641b496ff0Eb238e271923C5a25fd6e1A66329',
  type: 11
}
```

```sh
$ node ./scripts/3-membership-nft.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
Successfully created a new NFT in the drop!
```

```sh
$ node ./scripts/4-set-claim-condition.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
Successfully set claim condition on bundle drop: 0xb8641b496ff0Eb238e271923C5a25fd6e1A66329
```

```sh
$ node ./scripts/5-deploy-token.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
Successfully deployed token module, address: 0x19aF86C219C60551E11a18D2256d2ce9548E3A03
```

```sh
$ node ./scripts/6-print-money.js
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
There now is 1000000.0 $CCT in circulation
```

```sh
$ node ./scripts/7-airdrop-token.js
Going to airdrop 4689 tokens to 0xA74BFA1AaB524095Bf7Cb94ce6e46DCcfe624917
Starting airdrop...
Your app address is: 0xB9A1aD8B7fD6E124825A6b07A392997b6A247c76
Successfully airdropped tokens to all the holders of the NFT!
```
