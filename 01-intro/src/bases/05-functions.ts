
interface User {
    uid: string,
    username: string
};

function greet(name: string): string {
    return `Hello ${ name }`;
}

let greet2 = (name: string): string => `Hello ${ name }`;

console.log( greet('Andres') );
console.log( greet2('Andres') );

// greet = 12;
// greet2 = 28;

// console.log( greet );
// console.log( greet2 );

const getUser = (): User => {
    const user: User = {
        uid: 'ABC-123',
        username: 'Andy123'
    };

    return user;
}

console.log( getUser() );
console.log( (+'4') + 10 );





