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

export default statuses