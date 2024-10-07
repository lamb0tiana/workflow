import {statusType} from "@/lib/constant.ts";
export type statusItemType = Partial<Record<statusType, string>>
const statuses: statusItemType[] = [
    {
        new: "#cf6037"
    },
    {
        pending: "#c8c23e"
    },
    {
        processed: "#098e47"
    }
]


const get_statuses_template = () => `
<select class="select" >
    ${statuses.map((status) => {
    const value = Object.keys(status)[0];
    const color = Object.values(status)[0];
    return `<option data-color="${color}" value="${value}">${value}</option>`;
}).join('')}
</select>
`

export {get_statuses_template}
export default statuses