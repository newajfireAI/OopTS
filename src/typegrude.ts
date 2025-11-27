type Tinput = number | string ;

const checkInput =   (input1: Tinput, input2: Tinput): Tinput=> {

    if(typeof input1 === "number"  && typeof input2 === "number" ){
        return input1+input2
    }else{
        return input1.toString()+input2.toString()
    }

}

console.log(checkInput(2,2))
console.log(checkInput("2","2"))