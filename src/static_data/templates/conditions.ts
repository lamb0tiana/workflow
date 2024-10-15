import {ButtonConditionItemActionRow, createRow} from "@/lib/tools/conditions.ts";
import {ConditionType} from "@/lib/types.ts";


const get_conditions_template = (conditionType: ConditionType, nodeId: number): string => `
    <form class="rows" data-type="${conditionType}" data-node="${nodeId}">
        <div class="flex gap-3">    
            ${createRow(ButtonConditionItemActionRow.ADD_CONDITION_ITEM, conditionType)} 
        </div>
    </form>
`
export {get_conditions_template}