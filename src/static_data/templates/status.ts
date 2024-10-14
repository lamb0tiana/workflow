import {statusType} from "@/lib/constant.ts";
import {editor} from "@/main.ts";
import {selectionId} from "@/lib/editor.ts";
import {statuses} from "@/static_data/fields/status.ts";

export type statusItemType = Partial<Record<statusType, string>>

window.handleStatusChange = (e: Event) => {
    if (e.target) {
        const el = e.target as HTMLSelectElement
        const statusCandidate = statuses.find((status: statusItemType) => status[el.value as statusType])
        if (statusCandidate && el.parentNode?.parentNode) {
            (el.parentNode.parentNode as HTMLElement).style.backgroundColor = Object.values(statusCandidate)[0]
        }
        editor.updateNodeDataFromId(selectionId, {status: el.value})
    }
}
const get_statuses_template = (): string => `
<select class="select" onchange="handleStatusChange(event)">
    ${statuses.map((status) => {
    const value = Object.keys(status)[0];
    const color = Object.values(status)[0];
    return `<option data-color="${color}" value="${value}" >${value}</option>`;
}).join('')}
</select>
`

export {get_statuses_template}
export default statuses