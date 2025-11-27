type Tinput = number | string;

const checkInput = (input1: Tinput, input2: Tinput): Tinput => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

// console.log(checkInput(2,2))
// console.log(checkInput("2","2"))

type admin = {
    userName: string;
    role: string;
};

type user = {
    userName: string;
};

function login(input: admin | user) {
    if ("role" in input) {
       return `${input.userName} is the ${input.role} of this side`
    } else {
        return `${input.userName} is only a user`
    }
}
console.log(login({userName: "newaj", role: "admin"}))
console.log(login({userName: "newaj"}))



