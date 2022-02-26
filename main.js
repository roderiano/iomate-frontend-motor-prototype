import Workflow from './workflow.js'
import Vector2 from './vector.js'

let workflow = new Workflow();

let pos = new Vector2(10, 15);
let step = {
    "name": "start_application",
    "import": "packages.system",
    "return": null,
    "args": {
        "path": "str"
    }   
}
let response = workflow.addStep("test", pos, step);

console.log(workflow.getInstantiatedStepByID(response.id));
