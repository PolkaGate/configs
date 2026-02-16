# @PolkaGate/apps-config

This package contains the configuration and network metadata used across PolkaGate products.
It can be customized (via PR) to support additional chains and networks.



## Adding Support for a New Chain

To add a new chain to PolkaGate:
	
1.	Add the chain’s `genesis` hash, Edit `./packages/apps-config/src/networks/genesis.ts`
	
2.	Add network `metadata`, update `./packages/apps-config/src/networks/knownSubstrate.ts`
	
3.	Add your chain’s `endpoints` to the relevant file under
`./packages/apps-config/src/endpoints/{production, productionRelay, testing, testingRelay*` depending on your deployment.
	
4.	Add chain `logo and color`
	- Place the logo in ui/logos/chains or ui/logos/nodes (the latter is generally used).
	- Run yarn build:images to generate inline image assets.
	- In your endpoint config, set:
	    - ui.color — the chain’s primary color
	    - ui.logo — the imported logo reference



### Naming Recommendation

It’s recommended to use distinct chain names for each relay network. For example:

	-	Acala — on Polkadot
	-	Karura — on Kusama
	-	Mandala (or Acala Testnet) — as the test network
