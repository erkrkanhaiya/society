import breakpoints from './breakpoints'

export const CommonTheme = {
  white: '#ffffff',
  greyVeryLight: '#f2f2f2',
  greyLight: '#e5e5e5',
  greyMedium: '#9d9d9d',
  greyDark: '#444',
  black: '#000000',

  greySuperLight: '#707070',
  cyan: 'rgba(51,200,160,1)',
  cyanAlpha20: 'rgba(51,200,160, 0.2)',
  cyanAlpha30: 'rgba(51,200,160, 0.3)',
  cyanAlpha40: 'rgba(51,200,160, 0.4)',

  purple: 'rgb(73 31 105)',
  purpleAlpha20: 'rgb(157, 62, 230, 0.2)',
  purpleAlpha30: 'rgb(157, 62, 230, 0.3)',
  purpleAlpha40: 'rgb(157, 62, 230, 0.4)',

  statusSuccess: '#4fd05c',
  statusSuccessLight: '#e0f2e1',
  statusDanger: '#e00000',
  statusDangerLight: '#f7e1e1',
  statusWarning: '#f99033',
  statusWarningLight: '#fff7dd',
  statusInfo: '#0090c8',
  statusInfoLight: '#e4f3f9',

  spacing: '16px',
  spacingSm: '8px',
  spacingMd: '24px',
  spacingLg: '32px',
  spacingXl: '64px',

  headerHeight: '80px',
  footerHeight: '60px',
  fontNormal: '400',
  fontMedium: '500',
  fontBold: '700',

  // Font Family

  primaryFontFamily: 'System',
  secondryFontFamily: 'System',

  ...breakpoints,
}

export const PatientTheme = {
  color: {
    primary: '#491F69',
    secondary: '#33c8a0',
    statusWarning: '#f99033',
  },
  primary: '#491F69',
  primaryLight: '#faf3ff',
  primaryMedium: '#e9d9f5',
  primaryAlpha: '#f7f1ff',
  primaryAlpha10: 'rgba(73, 31, 105, 0.10)',
  primaryAlpha15: 'rgba(73, 31, 105, 0.15)',
  primaryAlpha20: 'rgba(73, 31, 105, 0.20)',

  secondary: '#1A5549',
  secondaryLight: '#DFFFF9',
  secondaryMedium: '#00C8A0',
}

export const navigationTheme = {
  dark: false,
  colors: {
    primary: '#E14032',
    background: '#fff',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
}
