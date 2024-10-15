import Drawflow from 'drawflow'
import '@/styles/base.css'
import 'drawflow/dist/drawflow.min.css'
import '@/styles/workflow.scss'
import {handleDrag} from "@/lib/node.ts";
import statuses from "@/static_data/templates/status.ts";
import {EditorEventHandler} from "@/lib/editor.ts";

let editor: Drawflow;

export {editor}

window.addEventListener("load", () => {
    const DOM = document.getElementById("drawflow") as HTMLElement;

    editor = new Drawflow(DOM);

    editor.on('nodeCreated', (e) => {
        const el = editor.getNodeFromId(e)
        if (el.data.type === 'status') {
            //set default background status type node
            const first = statuses[0]
            const defaultColor = Object.values(first)[0]

            const dom = document.getElementById(`node-${el?.id}`)
            if (dom) {
                dom.style.backgroundColor = defaultColor;
            }

        }
    })

    editor.start();
    handleDrag(DOM)
    EditorEventHandler()

    document.getElementById('export_action')?.addEventListener('click', () => {
        const data = editor.export()
        console.log(data)
    })
});
