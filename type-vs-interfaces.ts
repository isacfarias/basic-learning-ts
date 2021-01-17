//interfaces
interface Animal {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned: boolean
}

const animal: Mammal = {
    hungry: false,
    weaned: true,
    sex: 'male',
    age: 6
}

//type, para estender o type faz se da forma abaixo
type Person = Mammal & {
    name: string
}

const pessoa: Person = {
    hungry: false,
    weaned: true,
    sex: 'male',
    age: 18,
    name: 'Joaquin'
}



interface Greet {
    (name: string): string
}

const greet: Greet = name => 'Eae, ' + name;


type GreetMethod = (name: string) => string;
const greetMethod: GreetMethod = name => 'eaeae, ' + name;












