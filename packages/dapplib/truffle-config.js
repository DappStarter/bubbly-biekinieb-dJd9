require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name raise pitch pulp harvest infant flock shell'; 
let testAccounts = [
"0x40da137df3a737e625e094684b03115f0f84cab27433dac3f090ae574fad6266",
"0xb6f51afab49404bdd4179afa588e0d2c2172f5e72a5c447c0df914c353255fa0",
"0x1e1220a0768e4fe72d5401bffa74a94bc3c161c9ad1f04bdc7c284cfcd0cbb3f",
"0x5df23509fa7a945c752f9482b384c23442daa639498a1ecf2097d46545daca73",
"0xb87751b031eb0fc1c3560ff010fda838e02936ae919de2a50c68036d459d0ae9",
"0x4cf8030088c715955ed0cb663275af648315b3fa8ca8eda0401e80fa51b670b3",
"0x8324946b458b36f8c44eea10084bd7c73d34d5cad81d60fc5a48b7b84b0e1b6a",
"0xe6e5fff6f785ee0c475b483edae43507971c1840058f59f08191392d8c7e58bd",
"0xdc39b02f016d4a3f5433f68950f4924991b2f6470c42c2185b35e7c5aac62948",
"0xe6038e863a4326a30068a201cf2683eb3a168dcb4db7490aa444d78d247a14ce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


