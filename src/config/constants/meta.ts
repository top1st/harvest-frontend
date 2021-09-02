import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HarvestSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HarvestSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HarvestSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HarvestSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HarvestSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HarvestSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HarvestSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HarvestSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('HarvestSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HarvestSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HarvestSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('HarvestSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('HarvestSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HarvestSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HarvestSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('HarvestSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
