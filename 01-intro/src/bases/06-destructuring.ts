
//#region Object destructuring
// interface Hero {
//     name: string;
//     age: number;
//     nickname: string;
//     rank?: string
// };

// const person: Hero = {
//     name: 'Tony',
//     age: 45,
//     nickname: 'Ironman'
// };

// const { nickname } = person;

// console.log( nickname );

// const useContext = ({ name, age, nickname, rank }: Hero) => {
//     return {
//         keyName: nickname,
//         user: {
//             name,
//             age
//         },
//         rank
//     };
// };

// const { keyName, rank, user:{ name } } = useContext(person);

// console.log({ keyName, rank, name });
//#endregion

//#region array destructuring

// const characters = ['Ironman', 'Hulk', 'Batman'];

// const [ , , bruce ] = characters;

// console.log( bruce );

//#endregion 

//#region destructuring task

const useState = (name: string) => {
    return [ name, (arg: string) => console.log(arg)] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta'); 
//#endregion