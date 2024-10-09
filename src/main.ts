import Drawflow from 'drawflow'
import '@/styles/base.css'
import 'drawflow/dist/drawflow.min.css'
import '@/styles/workflow.scss'
import {handleDrag} from "@/lib/node.ts";
import statuses from "@/static_data/statuses.ts";
let selectionId: number = 0

export {selectionId}

window.addEventListener("load", () => {
    const id = document.getElementById("drawflow") as HTMLElement;

    const editor = new Drawflow(id);
    editor.on('nodeCreated', (e) => {
        const el = editor.getNodeFromId(e)

        if (el.data.type === 'status') {
            const first = statuses[0]
            const defaultColor = Object.values(first)[0]

            const dom = document.getElementById(`node-${el?.id}`)
            if (dom) {
                dom.style.backgroundColor = defaultColor;
            }

        }
    })

    editor.start();

    handleDrag(id, editor)

    editor.on('nodeCreated', (e) => {
        selectionId = e
    })
    editor.on('nodeSelected', (e) => {
        selectionId = e
    })

    document.getElementById('export_action')?.addEventListener('click', () => {
        const data = editor.export()
        console.log(data)
    })
});
