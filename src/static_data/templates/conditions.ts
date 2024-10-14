import {ButtonConditionItemActionRow, createRow} from "@/lib/tools/conditions.ts";

export type ConditionFieldType = {
    field: string
    operators: Record<"label" | "value", string>[]
    values: string[] | null
}

export enum ConditionType {
    LEAD = 'LEAD',
    ACTION = 'ACTION'
}

const get_conditions_template = (conditionType: ConditionType): string => `
    <form class="rows" data-type="${conditionType}">
        <div class="flex gap-3">    
            ${createRow(ButtonConditionItemActionRow.ADD_CONDITION_ITEM, conditionType)} 
        </div>
    </form>
`
export {get_conditions_template}