import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'HTCCAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xaC72026454e15f671B4f0b4E8C0fC5faD0f77107',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'HTCCAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x6d9741cAC4230280518C96933B7CA23967B2F6e1',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xEA466C79F8f96468565459Ef6352c0B9D6eFcb8c',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

]

export default farms
