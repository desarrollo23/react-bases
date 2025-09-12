


const arr: number[] = [1,2,3,4,];
const arr2: number[] = structuredClone(arr);

arr2.push(5);

console.log( arr, arr2 );
