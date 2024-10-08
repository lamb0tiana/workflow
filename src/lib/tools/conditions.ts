import {conditions_candidates} from "@/static_data/conditions.ts";

const createRow = () => {

    return `
        <select class="select" name="condition">   
            ${conditions_candidates.map(candidate => `<option>${candidate.field}</option>`)}
        </select>
        <select class="select" name="operator_value">
            ${conditions_candidates[0].operators.map(operator => `<option value="${operator.value}">${operator.label}</option>`)}
        </select>
        ${conditions_candidates[0].values ?
        `<select class="select" name="condition_value">
            ${conditions_candidates[0].values.map(value => `<option value="${value}">${value || '(null)'}</option>`)}
        </select>` : `<input/>`}
    `;
};

export {createRow};
