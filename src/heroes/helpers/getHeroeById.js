import { heroes } from "../data/heroes"

export const getHeroBiId = (id) => {
  return heroes.find(hero => hero.id === id)
}