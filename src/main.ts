import Drawflow, {ConnectionEvent} from 'drawflow'
import '@/styles/base.css'
import 'drawflow/dist/drawflow.min.css'
import '@/styles/workflow.scss'
import {handleDrag} from "@/lib/node.ts";
import statuses from "@/static_data/statuses.ts";
import {NodeType} from "@/lib/constant.ts";
import {notify} from "@/lib/tools/functions.ts";


let selectionId: number = 0
let editor: Drawflow;

export {selectionId, editor}

window.addEventListener("load", () => {
    const id = document.getElementById("drawflow") as HTMLElement;

    editor = new Drawflow(id);

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

    handleDrag(id, editor)

    editor.on('nodeCreated', (e) => {
        selectionId = e
    })
    editor.on('nodeSelected', (e) => {
        selectionId = e
    })
    editor.on('connectionCreated', (event: ConnectionEvent) => {
        const {input_id, output_id} = event
        const from_payload = editor.getNodeFromId(output_id)
        const to_payload = editor.getNodeFromId(input_id)

        const {name: from_name, id: from_id} = from_payload
        const {name: to_name, id: to_id} = to_payload

        if ([NodeType.status, NodeType.action].includes(<NodeType>from_name) && to_name === NodeType.conditions) {
            to_payload.inputs.input_1.connections.forEach(({node}) => {
                const _node = editor.getNodeFromId(node)
                if (_node.name !== from_payload.name) {
                    editor.removeSingleConnection(from_id, to_id, 'output_1', 'input_1')
                    notify("Un status ne peut pas être lier à la fois à une condition et une action.", 2000, "notification alert")
                    return
                }
            })
        }

    })

    document.getElementById('export_action')?.addEventListener('click', () => {
        const data = editor.export()
        console.log(data)
    })
});
