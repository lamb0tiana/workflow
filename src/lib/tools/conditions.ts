import {conditions_candidates, ConditionType} from "@/static_data/conditions.ts";
const remove_item_button = () => `<img  onclick="remove_condition_item_row(event)" src="/icons/trash.svg" class="w-5 ml-0.5 hover:cursor-pointer" alt="trash"/> `
const add_item_button = () => `<img  onclick="add_condition_row(event)" src="/icons/add.svg" class="w-6 hover:cursor-pointer" alt="trash"/> `
window.handleFieldChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const selectedValue = target.value.trim();
    const source = conditions_candidates.find(c => c.field.trim() === selectedValue);

    if (source) {
        updateRow(source, target.parentElement);
    }
};
window.remove_condition_item_row = (event: MouseEvent) => {
    event.target?.parentElement.remove()
}


window.add_condition_row = (e: Event) => {
    const container = e.target?.parentElement.parentElement;
    container.innerHTML += `<div class="flex gap-3 mt-2">${createRow() + remove_item_button()}</div>`
}

const updateRow = (source: ConditionType, container: HTMLElement|null = null) => {
    const rowContent = `
        <select class="select" name="condition" onchange="handleFieldChange(event)">   
            ${conditions_candidates.map(candidate => `<option ${candidate.field === source.field ? 'selected' : ''}>${candidate.field}</option>`).join('')}
        </select>
        <select class="select" name="operator_value">
            ${source.operators.map(operator => `<option value="${operator.value}">${operator.label}</option>`).join('')}
        </select>
        ${source.values ?
        `<select class="select" name="condition_value">
                ${source.values.map(value => `<option value="${value}">${value || '(null)'}</option>`).join('')}
            </select>` :
        `<input type="text" name="condition_value" placeholder="(null)" />`}
    `;

    if(!container) return rowContent
    container.innerHTML = rowContent;
};

const createRow = () => {
    const defaultSource = conditions_candidates[0];
    return updateRow(defaultSource);
};

export { createRow, add_item_button };
