import Drawflow from "drawflow";
import {nodeType, statusType} from "@/lib/constant.ts";
import statuses, {get_statuses_template, statusItemType} from "@/static_data/statuses.ts";
import {get_actions_template} from "@/static_data/action.ts";
import {get_conditions_template} from "@/static_data/conditions.ts";

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
    let template = ""
    switch (type) {
        case "status":
            template = get_statuses_template()
            break;
        case "action":
            template = get_actions_template()

            break;
        case "conditions":
             template = get_conditions_template();

    }
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
