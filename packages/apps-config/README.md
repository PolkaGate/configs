# @polkagate/apps-config

This package contains the configuration and network metadata used across PolkaGate products.
It can also be customized (via PR) to support additional chains and networks.



## Adding Support for a New Chain

To add a new chain to PolkaGate:
	
1.	Add the chain’s `genesis` hash, Edit `./networks/genesis.ts`
	
2.	Add network `metadata`, update `./networks/knownSubstrate.ts`
	
3.	Add your chain’s `endpoints` to the relevant file under
`./endpoints/{production, productionRelay, testing, testingRelay*` depending on your deployment.
	
4.	Add chain `logo and color`
	- Place the logo in ui/logos/chains or ui/logos/nodes (the latter is generally used).
	- Run yarn build:images to generate inline image assets.
	- In your endpoint config, set:
	    - ui.color — the chain’s primary color
	    - ui.logo — the imported logo reference


## Adding Support for a New Token

PolkaGate supports both Substrate-native tokens and ERC20 tokens.

### Substrate Tokens

To add a Substrate-based token:          
  - Add the token metadata to an existing supported chain, or    
  - Define a new chain configuration in the corresponding file under: `./assets/substrate`

### ERC20 Tokens

To add an ERC20 token:     
  - Include the token metadata along with its contract address, and  
  - Add it to an existing supported chain, or define a new one in: `./assets/evm`


### Naming Recommendation

It’s recommended to use distinct chain names for each relay network. For example:

	-	Acala — on Polkadot
	-	Karura — on Kusama
	-	Mandala (or Acala Testnet) — as the test network
