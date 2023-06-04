 import { Theme, Themes } from "../models/themes";

 const light: Theme = {
  name: 'light',
  colors: {
    bgPrimary: '#4682b4',
    bgSecondary: 'rgb(237, 240, 241)',
    iconSun: 'orange',
    iconLune: 'transparent'
  },
  transform: '0'
 }

 const dark: Theme = {
  name: 'dark',
  colors: {
    bgPrimary: 'black',
    bgSecondary: 'gray',
    iconSun: 'transparent',
    iconLune: '#4682b4'
  },
  transform: 'translate3d(27px, 0, 0)'
 }

export const themes: Themes = {
  light,
  dark
} 