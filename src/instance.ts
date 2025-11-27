class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numberOfhours: number) {
    console.log(
      `${this.name} this person Sleep ${numberOfhours} hours Everyday`
    );
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  getTution(numberOfhours: number) {
    console.log(
      `${this.name} this Student get ${numberOfhours} hours Tution Everyday`
    );
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  giveLeseon(numberOfhours: number) {
    console.log(
      `${this.name} this Teacher give ${numberOfhours} hours Tution Everyday`
    );
  }
}



const isStudent = (user:Person)=>{
    return user instanceof Student    
}
const isTeacher = (user:Person)=>{
    return user instanceof Teacher    
}

const getPerson = (user: Person) => {
  if (isStudent(user)) {
    return user.getSleep(5);
  } else if (isTeacher(user)) {
    return user.giveLeseon(10);
  } else {
    user.getSleep(4);
  }
};

const Person1 = new Person("Hero Alam");
const Student1 = new Student("Alamgir Hossain");
const Teacher1 = new Teacher("Aram Ali");

getPerson(Teacher1)
