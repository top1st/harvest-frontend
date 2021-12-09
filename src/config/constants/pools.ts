import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x96E89AD4dDE2279236308aB2B9EFAE5164CB703e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 217,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bp,
  //   contractAddress: {
  //     97: '',
  //     56: '0x8ed7acf12b08274d5cdaf03d43d0e54bcbdd487e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.217',
  // },

]

export default pools
