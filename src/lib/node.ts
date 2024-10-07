import Drawflow from "drawflow";
import {nodeType, statusType} from "@/lib/constant.ts";
import statuses from "@/static_data/statuses.ts";

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
        let template: string = `<select class="select" >`
        if (type === "status") {
            template += statuses.map((status: object) => {
                const key = Object.keys(status)[0]
                const value = Object.values(status)[0]
                return `<option style="background-color: ${value}" value=${value}>${key}</option>`

            })

        }
        template += `</select>`
        editor.addNode(type, 1, 1, x, y, type, {}, template, false);
    });
}

export {handleDrag}
