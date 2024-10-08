import {conditions_candidates} from "@/static_data/conditions.ts";
window.handleFieldChange = (e: Event) => {
const target = e.target
    if(target?.value){
        console.log(conditions_candidates.find(c => c.field.trim() === target.value.trim()))
    }

}
const createRow = () => {
    const source = conditions_candidates[0]
    return `
        <select class="select" name="condition" onchange="handleFieldChange(event)">   
            ${conditions_candidates.map(candidate => `<option>${candidate.field}</option>`)}
        </select>
        <select class="select" name="operator_value">
            ${source.operators.map(operator => `<option value="${operator.value}">${operator.label}</option>`)}
        </select>
        ${source.values ?
        `<select class="select" name="condition_value">
            ${source.values.map(value => `<option value="${value}">${value || '(null)'}</option>`)}
        </select>` : `<input/>`}
    `;
};

export {createRow};
