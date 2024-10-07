import Drawflow from "drawflow";
import {nodeType, statusType} from "@/lib/constant.ts";
import statuses, {statusItemType} from "@/static_data/statuses.ts";
import actions from "@/static_data/action.ts";

const handleChange = (e: Event, type: nodeType) => {

    if (e.target) {
        const el = e.target as HTMLSelectElement
        if (type === "status") {
            const a = statuses.find((status: statusItemType) => status[el.value as statusType])
            if (a && el.parentNode?.parentNode)
                el.parentNode.parentNode.style.backgroundColor = Object.values(a)[0]
        }

    }

}
window.handleChange = handleChange;

const renderOptions = (type: nodeType) => {
    let template: string =  `<select class="select" onchange="handleChange(event, '${type}')">`
    if (type === "status") {
        template += statuses.map((status: object) => {
            const value = Object.keys(status)[0]
            const color = Object.values(status)[0]
            return `<option data-color="${color}" value=${value}>${value}</option>`
        })

    } else if (type === "action") {
        template += actions.map(action => `<option>${action}</option>`)
    }
    template += `</select>`
    return template
}

const handleDrag = (id: HTMLElement, editor: Drawflow) => {
    const paletteItems = document.querySelectorAll<HTMLDivElement>('#palette .node');
    paletteItems.forEach(item => {
        item.addEventListener('dragstart', (e: DragEvent) => {
            if (e.dataTransfer) {
                e.dataTransfer.setData('text/plain', item.getAttribute('data-type') || '');
                e.dataTransfer.effectAllowed = "move";
            }
        });
    });
    id.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
        if (e?.dataTransfer) e.dataTransfer.dropEffect = "move";
    });

    id.addEventListener('drop', (e: DragEvent) => {
        e.preventDefault();
        const type = e?.dataTransfer?.getData('text/plain') as nodeType;
        const rect = id.getBoundingClientRect();
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;

        editor.addNode(type, 1, 1, x, y, type, {type}, renderOptions(type), false);

    });
}

export {handleDrag}
