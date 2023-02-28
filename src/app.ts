// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
    // return Object.assign(objA, objB);
    return { ...objA, ...objB };
}

const mergedObj = merge({ name: 'Vlad' }, { age: 41 });

console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(elements: T): [T, string] {
    let desc = 'Got no value.';

    if (elements.length === 1) {
        desc = 'Got 1 element'
    } else if (elements.length > 1) {
        desc = `Got ${elements.length} elements`;
    }

    return [elements, desc];
}

console.log(countAndDescribe('some text is here'));
console.log(countAndDescribe([1, 2, 3, 4, 5]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Vlad'}, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Vlad');
textStorage.addItem('Tania');
console.log(textStorage.getItems());
textStorage.removeItem('Tania');
console.log(textStorage.getItems());

interface CourceGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourceGoal(
    title: string,
    description: string,
    date: Date
): CourceGoal {
    let courceGoal:Partial<CourceGoal> = {};

    courceGoal.title = title;
    courceGoal.description = description;
    courceGoal.completeUntil = date;

    return courceGoal as CourceGoal;
}

const names: Readonly<string[]> = ['Vlad', 'Tania'];

// names.push('Lena');
