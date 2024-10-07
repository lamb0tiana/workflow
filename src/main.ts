import Drawflow from 'drawflow'
import '@/styles/base.css'
import 'drawflow/dist/drawflow.min.css'
import '@/styles/workflow.scss'
import {handleDrag} from "@/lib/functions";


window.addEventListener("load", () => {
    const id = document.getElementById("drawflow") as HTMLElement;

    const editor = new Drawflow(id);

    editor.start();

    handleDrag(id, editor)
});
