// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
    // return Object.assign(objA, objB);
    return {...objA, ...objB};
}

const mergedObj = merge({ name: 'Vlad' }, { age: 41 });

console.log(mergedObj);
