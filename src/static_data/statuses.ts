import {statusType} from "@/lib/constant.ts";

const statuses: Partial<Record<statusType, string>>[] = [
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