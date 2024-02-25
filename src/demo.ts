// part 1
let x: number
let y: string
let z: boolean
let a: Date
let b: any

b = "Hello"
b = 1234


// part 2-3-4
interface Contact { // volendo si può collegare con "extends Address"
    id: number;
    name: ContactName;
    birthDate?: Date; //(?) = campo non richiesto per forza, senza significa required = true
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new",
}

let primaryContact: Contact = {
    birthDate: new Date("02-02-1997"), //non c'è l'errore grazie al "?"
    id: 12345,
    name: "Riccardo Spadon",
    status: ContactStatus.Active
}

type ContactName = string

// part 5-6
interface Contact2 {
    id: number;
    name: string;
}

interface UserContact2 {
    id: number;
    name: string;
    username: string;
}

function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source)
}

const c: Contact2 = { id: 123, name: "Homer Simpson" };
const d = clone<Contact2, UserContact2>(c);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy =  clone(dateRange);