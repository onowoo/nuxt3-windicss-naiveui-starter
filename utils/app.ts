import { ThemeManager } from './theme'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Awesome Starter',
    author: {
      name: 'viandwi24',
      link: 'https://www.landian.net',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // return
  return {
    app,
    themeManager,
  }
}
