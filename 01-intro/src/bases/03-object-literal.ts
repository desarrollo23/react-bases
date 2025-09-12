interface Skills {
    Fly: number,
    Run: number,
    Hit: number
};

interface Hero {
    Name: string,
    Age: number,
    Skills?: Skills
};

// const newEmployee: Employee = {
//     Name: 'Andres',
//     Age: false,
//     Phone: 3004355304
// }

// console.log( { newEmployee} );


const ironman: Hero = {
    Name: 'Tony Stark',
    Age: 45,
    Skills: {
        Fly: 87,
        Run: 10,
        Hit: 80
    }
};

console.log( ironman );

// const hero2 = structuredClone(hero);

// hero2.Name = 'Peter';
// hero2.Age = 22;
// hero2.Skills.Fly = 30;

// console.log( hero, hero2 );
