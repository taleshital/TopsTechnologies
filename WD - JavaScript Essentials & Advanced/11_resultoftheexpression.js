
//Q.11 What is the result of the expression (true && 1 && "hello")

if (true && 1 && "hello") {

    document.write(true);
}
else {
    document.write(false)
}

//true && 1: Since true is truthy and 1 is also truthy (in JavaScript, any non-zero number is truthy), the result of this is 1.true && "hello" (non empty string also true) so true && true => true. 