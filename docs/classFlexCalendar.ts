//FlexCalendar
class Person {
  name: string
  email: string
  document: string
  telephone: string
  gender: string
  photo: string
  typePerson: string
  typeAccess: string
  password: string
  address: Address
  company: Company
  isActive: boolean
}

class Address {
  zipCode: string
  street: string
  neighborhood: string
  city: string
  state: string
  number: string
  complement: string
}

class Service {
  name: string
  value: number
  description: string
  photos: string[]
  duration: number
  products: Product[]
  comments: Commentary[]
  company: Company
  isActive: boolean
}

class Product {
  name: string
  description: string
  value: number
  comments: Commentary
  isActive: boolean
}

class Commentary {
  text: string
  network: string
  person: Person
  isActive: boolean
}

class Calendar {
  date: string
  time: string
  person: Person
  services: Service[]
  isActive: boolean
}

class Company {
  name: string
  address: Address
  document: string
  startCalendar: string
  endCalendar: string
  isActive: boolean
}

//FleAccounts
//FlexTasks
