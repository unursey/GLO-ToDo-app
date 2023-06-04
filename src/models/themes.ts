export interface Theme {
  name: string,
  colors: {
    bgPrimary: string,
    bgSecondary: string,
    iconSun: string,
    iconLune: string,
  },
  transform: string
}

export interface Themes {
  [key: string]: Theme
}