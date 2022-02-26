import Step from "./step.js"

export default class Workflow {
    constructor() {
        this.availableSteps = [
            {
                "name": "start_application",
                "import": "packages.system",
                "return": null,
                "args": {
                    "path": "str"
                }   
            }
        ];
        this.instantiatedSteps = [];
    }

    addStep(name, position, step_data) {
        let isTheSame = this.availableSteps.some(step => step.name === step_data.name);

        if(!isTheSame)
            throw new Error('This step is not availabe');

        let step = new Step(name, position, step_data) ;
        this.instantiatedSteps.push(step);

        return step;
    }

    getInstantiatedStepByID(id) {
        let steps = this.instantiatedSteps.filter(step => step.id === id);
        return steps.length > 0 ? steps[0] : null;
    }

    getInstantiatedStepsByPosition(x, y) {
        let steps = this.instantiatedSteps.filter(step => step.position.x === x && step.position.y === y);
        return steps;
    }

    updateStepPositionByID(id, x, y) {
        let step = this.getInstantiatedStepByID(id);

        if(step)
        {
            step.position.x = x;
            step.position.y = y;

            return step;
        }
        else
            return null;
    }
}