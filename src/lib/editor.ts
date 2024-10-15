import {ConnectionEvent} from "drawflow";
import {NodeType} from "@/lib/constant.ts";
import {notify} from "@/lib/tools/functions.ts";
import { get_conditions_template} from "@/static_data/templates/conditions.ts";
import {editor} from "@/main.ts";
import {ConditionType} from "@/lib/types.ts";

let selectionId: number = 0
const EditorEventHandler = () => {
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
                const connections = to_payload.inputs.input_1.connections
                for (const {node} of connections) {
                    const _node = editor.getNodeFromId(node)
                    if (_node.name !== from_payload.name) {
                        editor.removeSingleConnection(from_id, to_id, 'output_1', 'input_1')
                        notify("Un status ne peut pas être lier à la fois à une condition et une action.", 2000, "notification alert")
                        break
                    } else {
                        const target = `#node-${to_payload.id} .drawflow_content_node`
                        const container = document.querySelector(target + ' form')
                        const parser = new DOMParser();
                        const templateType = from_name === NodeType.status ? ConditionType.LEAD : ConditionType.ACTION
                        if (container) {
                            const set_type = (container as HTMLElement).dataset.type || ''
                            if ((from_name === NodeType.status && set_type === ConditionType.LEAD) || (from_name === NodeType.action && set_type === ConditionType.ACTION)) {
                                break
                            } else {
                                (document.querySelector(target) as HTMLElement).innerHTML = ''
                            }
                        }
                        const conditionsTemplate = get_conditions_template(templateType, to_id)
                        const contentString = `<div class="container flex flex-col gap-2">${conditionsTemplate}</div>`
                        const content = parser.parseFromString(contentString, 'text/html')
                        document.querySelector(target)?.appendChild(content.body.firstElementChild as Node)
                    }
                }

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