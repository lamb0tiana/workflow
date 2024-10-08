import Drawflow from "drawflow";
import {nodeType} from "@/lib/constant.ts";
import  {get_statuses_template} from "@/static_data/statuses.ts";
import {get_actions_template} from "@/static_data/action.ts";
import {get_conditions_template} from "@/static_data/conditions.ts";



const renderOptions = (type: nodeType) : string => {
    switch (type) {
        case "status":
            return get_statuses_template()
        case "action":
            return get_actions_template()
        case "conditions":
             return  get_conditions_template();

    }
    return ""
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
