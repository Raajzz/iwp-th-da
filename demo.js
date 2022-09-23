const run = () => {
    console.log("Run function is called");
    return 1;
}

console.log(run);

run();

run.key = "value";

run();

console.log(run.key);

console.log(run);

const abc = {
    a: 1,
    b: 2
}

const { a, b } = abc;

console.log(a, b);