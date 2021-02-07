// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHER = 2;

enum Role { ADMIN=5, READ_ONLY, AUTHOR};

const person = {
    name: 'ada',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

let favoriteAc: any[];
favoriteAc = ['sports', 4];

// person.role = [0, 'admin'];
// person.role[1] = 10;

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.AUTHOR) {
    console.log('is admin')
}