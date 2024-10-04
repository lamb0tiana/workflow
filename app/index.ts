import Drawflow from 'drawflow'
import 'drawflow/dist/drawflow.min.css'
import {handleDrag} from "../lib/flow";


window.addEventListener("load", (event) => {
    const id = document.getElementById("drawflow") as HTMLElement;

    const editor = new Drawflow(id);

    editor.start();

    handleDrag(id, editor)
});

