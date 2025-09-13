import { heros, Hero, Owner } from "../data/heros.data"

export const getHeroById = (id: number): Hero | undefined => {
    return heros.find( hero => hero.id === id);
}

export const getHeroByOwner = (owner: Owner): Hero[] => {

    let herosByOnwer: Hero[] = [];

    herosByOnwer = heros.filter( hero => hero.owner === owner);

    return herosByOnwer;
}

// console.log(getHeroById(3));
// console.log(getHeroByOwner(Owner.Marvel));

