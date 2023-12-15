// This is an example typescript definition type.
type Example = {
    example:string;
}

// You can complete this test using a Javascript class.
export class ExampleClass {
    constructor(private example: Example) {}

    init() {
        return this.example as Example;
    }
}

// OR

// You can complete this using function expressions (ES6).
const ExampleFunctionalExpression = (example: Example) => {
    return example as Example;
}