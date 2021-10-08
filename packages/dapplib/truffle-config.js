require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stool cruise shift promote inner praise army general'; 
let testAccounts = [
"0xedf78f00bb0a824de5ded821b47e4fe01d23c5ce838408924d0d4b3689300243",
"0x3cafc72cc453dbbab32e0d84fdc9e9aa9da126392021e1d9b6773f70d6682d73",
"0xb4475dacdab636c15864be6119410e3eae4c28aa4c7a7d3c347282a39bc75465",
"0x9fe8310e66d06ce7998566b40bcded960a03c2e8a101858047c181b705ede5da",
"0x2e82304a9ce4db809bb76e0e233d57e455ab65b218bd67286fb5c7ccf86df504",
"0x309297aa266169f6b4c03c342b4a412d056a02567ecfecc0d37ed48d77397ad9",
"0xe5391e639a974f0265e9bbc463737bc37709f3e571da066e4b42bbf1a14d2d84",
"0xd24ab7a9575315456aa18178ef07f481209979ab8ef3ab3642e5a57afbc37fce",
"0x994ebae870fd1a112cefc93d1560032e7f900f24b554a518bfb5b6fad3426775",
"0xe18c9a264ad7cafdba2b501b9a6655ac4142b4c4a3f22d3c578e846d9d41c1a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

