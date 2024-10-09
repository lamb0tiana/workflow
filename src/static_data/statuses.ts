import {statusType} from "@/lib/constant.ts";
import {editor, selectionId} from "@/main.ts";

export type statusItemType = Partial<Record<statusType, string>>
const statuses: statusItemType[] = [
    {
        "A traiter CRC": "#e83a75"
    },
    {
        "En cours CRC": "#e2bb33"
    },
    {
        "A traiter VN": "#e83a75"
    },
    {
        "En cours VN": "#e2bb33"
    },
    {
        "Clos":"#bebebe"
    }
]

window.handleStatusChange = (e: Event) => {
    if (e.target) {
        const el = e.target as HTMLSelectElement
        const statusCandidate = statuses.find((status: statusItemType) => status[el.value as statusType])
        if (statusCandidate && el.parentNode?.parentNode) {
            el.parentNode.parentNode.style.backgroundColor = Object.values(statusCandidate)[0]
        }
        editor.updateNodeDataFromId(selectionId, {status: el.value})
    }
}
const get_statuses_template = () => `
<select class="select" onchange="handleStatusChange(event)">
    ${statuses.map((status) => {
    const value = Object.keys(status)[0];
    const color = Object.values(status)[0];
    return `<option data-color="${color}" value="${value}">${value}</option>`;
}).join('')}
</select>
`

export {get_statuses_template}
export default statuses