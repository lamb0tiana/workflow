import Drawflow from 'drawflow'

import  'drawflow/dist/drawflow.min.css'


window.addEventListener("load", (event) => {
    const id: HTMLElement = document.getElementById("drawflow") as HTMLElement;
    const editor = new Drawflow(id);
    editor.start();
});

