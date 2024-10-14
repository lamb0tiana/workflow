import Drawflow, {ConnectionEvent} from "drawflow";
import {NodeType} from "@/lib/constant.ts";
import {notify} from "@/lib/tools/functions.ts";
import {ConditionType, get_conditions_template} from "@/static_data/conditions.ts";

let selectionId: number = 0
const EditorEventHandler = (editor: Drawflow) => {
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
        const from_type = <NodeType>from_name

        if (to_name === NodeType.conditions) {
            if ([NodeType.status, NodeType.action].includes(from_type)) {
                to_payload.inputs.input_1.connections.forEach(({node}) => {
                    const _node = editor.getNodeFromId(node)
                    if (_node.name !== from_payload.name) {
                        editor.removeSingleConnection(from_id, to_id, 'output_1', 'input_1')
                        notify("Un status ne peut pas être lier à la fois à une condition et une action.", 2000, "notification alert")
                        return
                    } else {
                        if(from_name === NodeType.status){
                            console.log(from_payload, to_payload)
                            const target = `#node-${to_payload.id} .drawflow_content_node`
                            const parser = new DOMParser()
                            const content = parser.parseFromString(`<div class="container flex flex-col gap-2">${get_conditions_template(ConditionType.LEAD)}</div>`, 'text/html')
                            document.querySelector(target)?.appendChild(content.body.firstElementChild as Node)

                        }
                    }
                })
            } else if (from_type === NodeType.conditions) {
                editor.removeSingleConnection(from_id, to_id, 'output_1', 'input_1')
                notify("Deux noeuds  conditions ne peuvent pas être enchainer de suite !", 2000, "notification alert")
                return
            }
        }

    })
}

export {
    selectionId, EditorEventHandler
}