const { toWei } = require('web3-utils')

module.exports = {
  torn: {
    address: 'torn.contract.tornadocash.eth',
    cap: toWei('10000000'),
    pausePeriod: 45 * 24 * 3600, // 45 days
    distribution: {
      airdrop: { to: 'voucher', amount: toWei('500000') },
      miningV2: { to: 'rewardSwap', amount: toWei('1000000') },
      governance: { to: 'vesting.governance', amount: toWei('5500000') },
      team1: { to: 'vesting.team1', amount: toWei('822407') },
      team2: { to: 'vesting.team2', amount: toWei('822407') },
      team3: { to: 'vesting.team3', amount: toWei('822407') },
      team4: { to: 'vesting.team4', amount: toWei('500000') },
      team5: { to: 'vesting.team5', amount: toWei('32779') },
    },
  },
  governance: { address: 'governance.contract.tornadocash.eth' },
  governanceImpl: { address: 'governance-impl.contract.tornadocash.eth' },
  voucher: { address: 'voucher.contract.tornadocash.eth', duration: 12 },
  miningV2: {
    address: 'mining-v2.contract.tornadocash.eth',
    initialBalance: toWei('25000'),
    rates: [
      { instance: 'eth-01.tornadocash.eth', value: '10' },
      { instance: 'eth-1.tornadocash.eth', value: '20' },
      { instance: 'eth-10.tornadocash.eth', value: '50' },
      { instance: 'eth-100.tornadocash.eth', value: '400' },
    ],
  },
  rewardSwap: { address: 'reward-swap.contract.tornadocash.eth', poolWeight: 1e11 },
  tornadoTrees: { address: 'tornado-trees.contract.tornadocash.eth', levels: 20 },
  tornadoProxy: { address: 'tornado-proxy.contract.tornadocash.eth' },
  tornadoProxyLight: { address: '0x9a19E06322d1FE9bEDBd3F6555803De2713C1762' },
  rewardVerifier: { address: 'reward-verifier.contract.tornadocash.eth' },
  treeUpdateVerifier: { address: 'tree-update-verifier.contract.tornadocash.eth' },
  withdrawVerifier: { address: 'withdraw-verifier.contract.tornadocash.eth' },
  poseidonHasher2: { address: 'poseidon2.contract.tornadocash.eth' },
  poseidonHasher3: { address: 'poseidon3.contract.tornadocash.eth' },
  feeManager: { address: 'fee-manager.contract.tornadocash.eth' },
  tornadoStakingRewards: { address: 'staking-rewards.contract.tornadocash.eth' },
  relayerRegistry: { address: 'relayer-registry.contract.tornadocash.eth' },
  tornadoRouter: { address: '0x9a19E06322d1FE9bEDBd3F6555803De2713C1762' },
  instanceRegistry: { address: 'instance-registry.contract.tornadocash.eth' },
  deployer: { address: 'deployer.contract.tornadocash.eth' },
  vesting: {
    team1: {
      address: 'team1.vesting.contract.tornadocash.eth',
      beneficiary: '0x5A7a51bFb49F190e5A6060a5bc6052Ac14a3b59f',
      cliff: 12,
      duration: 36,
    },
    team2: {
      address: 'team2.vesting.contract.tornadocash.eth',
      beneficiary: '0xF50D442e48E11F16e105431a2664141f44F9feD8',
      cliff: 12,
      duration: 36,
    },
    team3: {
      address: 'team3.vesting.contract.tornadocash.eth',
      beneficiary: '0x6D2C515Ff6A40554869C3Da05494b8D6910D075E',
      cliff: 12,
      duration: 36,
    },
    team4: {
      address: 'team4.vesting.contract.tornadocash.eth',
      beneficiary: '0x504a9c37794a2341F4861bF0A44E8d4016DF8cF2',
      cliff: 12,
      duration: 36,
    },
    team5: {
      address: 'team5.vesting.contract.tornadocash.eth',
      beneficiary: '0x2D81713c58452c92C19b2917e1C770eEcF53Fe41',
      cliff: 12,
      duration: 36,
    },
    governance: {
      address: 'governance.vesting.contract.tornadocash.eth',
      cliff: 3,
      duration: 60,
    },
  },
  instances: {
    netId1: {
      eth: {
        instanceAddress: {
          // 0.1: '0x2FD6F383290f3640100119cBe175f0691f86a4E4',
          // 0.5: '0xf9550eE7ACdD3E5a6B932a920A345A56069075dD',
          // 1: '0xBFd02a8B75CC2CC4F6DE06b0C2340Bd6F8862A49',
          // 2: '0x92eB03d795Fd917E289f2e53301f7Df5E2526de1',
          // 5: '0x5E6f20DE931848523B2a91F0330107A92e7E0A22',
          0.1: '0x4e75240082787D802d226cA4206bFeF1b842B730',
          1: '0x45e0F782C003163C1ce447b983852713AE946510',
          2: '',
          5: '',
        },
        symbol: 'ETH',
        decimals: 18,
      },
      // dai: {
      //   instanceAddress: {
      //     100: '0xD4B88Df4D29F5CedD6857912842cff3b20C8Cfa3',
      //     1000: '0xFD8610d20aA15b7B2E3Be39B396a1bC3516c7144',
      //     10000: '0x07687e702b410Fa43f4cB4Af7FA097918ffD2730',
      //     100000: '0x23773E65ed146A459791799d01336DB287f25334',
      //   },
      //   tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      //   symbol: 'DAI',
      //   decimals: 18,
      // },
      // cdai: {
      //   instanceAddress: {
      //     5000: '0x22aaA7720ddd5388A3c0A3333430953C68f1849b',
      //     50000: '0x03893a7c7463AE47D46bc7f091665f1893656003',
      //     500000: '0x2717c5e28cf931547B621a5dddb772Ab6A35B701',
      //     5000000: '0xD21be7248e0197Ee08E0c20D4a96DEBdaC3D20Af',
      //   },
      //   tokenAddress: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      //   symbol: 'cDAI',
      //   decimals: 8,
      // },
      // usdc: {
      //   instanceAddress: {
      //     100: '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
      //     1000: '0x4736dCf1b7A3d580672CcE6E7c65cd5cc9cFBa9D',
      //     10000: '0xD691F27f38B395864Ea86CfC7253969B409c362d',
      //     100000: undefined,
      //   },
      //   tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      //   symbol: 'USDC',
      //   decimals: 6,
      // },
      usdt: {
        instanceAddress: {
          // 100: '0x169AD27A470D064DEDE56a2D3ff727986b15D52B',
          // 1000: '0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f',
          // 10000: '0xF67721A2D8F736E75a49FdD7FAd2e31D8676542a',
          // 100000: '0x9AD122c22B14202B4490eDAf288FDb3C7cb3ff5E',
          100: '0x8f92B30591B8e676f05C3DB5b7FdEC5172B31d44',
          1000: '',
          10000: '',
          100000: '',
        },
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 6,
      },
      // wbtc: {
      //   instanceAddress: {
      //     0.1: '0x178169B423a011fff22B9e3F3abeA13414dDD0F1',
      //     1: '0x610B717796ad172B316836AC95a2ffad065CeaB4',
      //     10: '0xbB93e510BbCD0B7beb5A853875f9eC60275CF498',
      //     100: undefined,
      //   },
      //   tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      //   symbol: 'WBTC',
      //   decimals: 8,
      // },
    },
    netId3: {
      eth: {
        instanceAddress: {
          0.1: '0x3F589e020B1cf7562d71D8eF0c245212A792f66b',
          0.2: '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
          0.5: '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
          1: '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
          5: '0x3f99a3B3e627e6c35Fde76f7Abf535903098D63D',
        },
        symbol: 'ETH',
        decimals: 18,
      },
    },
    netId5: {
      eth: {
        instanceAddress: {
          0.1: '0x591Eb6A2f04138da4216747adeccB3f7119397B1',
          1: '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
          10: '0x723B78e67497E85279CB204544566F4dC5d2acA0',
          100: '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7',
        },
        symbol: 'ETH',
        decimals: 18,
      },
      usdt: {
        instanceAddress: {
          100: '0x1B98E8cfA0C451Bf03E1d4700FF593F234D786dA',
          1000: '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
          10000: undefined,
          100000: undefined,
        },
        // tokenAddress: '0xb7FC2023D96AEa94Ba0254AA5Aeb93141e4aad66',
        tokenAddress: '0x4E74F6b7ED15B2750F77483785D9c2a722C29188',
        symbol: 'USDT',
        decimals: 18,
      }
    },
    netId10: {
      eth: {
        instanceAddress: {
          0.1: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          1: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
        },
        symbol: 'ETH',
        decimals: 18,
      },
    },
    netId56: {
      bnb: {
        instanceAddress: {
          1: '0x063117fD87cdD6184D8d8Da81Da5D06921e5D934',
          5: '0x064448354f5acE198D5BD820607526a618Bb343E',
          10: '0x66F80878915015AC7f35F46816675F71814a7361',
          20: '0xC0E54Fd3A8bD16beE179C15452de212BE1CD551B',
        },
        symbol: 'BNB',
        decimals: 18,
      },
      busd: {
        instanceAddress: {
          100: '0x90e0DbFCeA196b0cE5876161E3ac281c168a49d5',
          500: '0x83DF7bFabbD23BFAB8766AAD2440F8bD3178C869',
          1000: '0xbbb3744f6232CeFD5F53395E1081F03AcBaB6d36',
          2000: '0x4aB82015557AE2b09c825DbB6683De858A5ae74e',
          5000: '0x9a19E06322d1FE9bEDBd3F6555803De2713C1762',
        },
        tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD',
        decimals: 18,
      },
    },
    netId97: {
      bnb: {
        instanceAddress: {
          0.1: '0xf9ca8b168647228Cf6Fe3718d03464c85e6292E0',
          1: '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
          5: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          10: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          20: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
        },
        symbol: 'BNB',
        decimals: 18,
      },
      busd: {
        instanceAddress: {
          10: '0x13C1CE2b1e4303F303b69E552712FdbB40DEEB63',
          100: '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
        },
        tokenAddress: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
        symbol: 'BUSD',
        decimals: 18,
      },
    },
    netId100: {
      xdai: {
        instanceAddress: {
          100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          1000: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
          10000: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
          100000: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
        },
        symbol: 'xDAI',
        decimals: 18,
      },
    },
    netId137: {
      matic: {
        instanceAddress: {
          100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          1000: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
          10000: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
          100000: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
        },
        symbol: 'MATIC',
        decimals: 18,
      },
    },
    netId42161: {
      eth: {
        instanceAddress: {
          0.1: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          1: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
        },
        symbol: 'ETH',
        decimals: 18,
      },
    },
    netId43114: {
      avax: {
        instanceAddress: {
          10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          500: '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3',
        },
        symbol: 'AVAX',
        decimals: 18,
      },
    },
  },
}
