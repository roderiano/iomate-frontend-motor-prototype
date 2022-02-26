export default class Step {
    constructor(customName, position, stepData) {
        this.id = this.generateID()
        this.customName = customName;
        this.position = position;
        this.args = this.generateArgsObject(stepData.args);
        this.stepData = stepData;
        
    }

    generateID() {
        return Math.floor(Math.random() * (0 - 9999999999) + 9999999999)
    }

    generateArgsObject(args) {
        return Object.keys(args).reduce(
            (accumulator, key) => { 
                return {...accumulator, [key]: null}; 
            }, {}
        );
    }
}
