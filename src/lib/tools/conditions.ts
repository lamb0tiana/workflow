import {conditions_candidates, ConditionType} from "@/static_data/conditions.ts";

export enum ButtonConditionItemActionRow {
    ADD_CONDITION_ITEM = 'ADD_CONDITION_ITEM',
    DELETE_CONDITION_ITEM = 'DELETE_CONDITION_ITEM'
}

const remove_item_button = () => `<img  onclick="remove_condition_item_row(event)" src="/icons/trash.svg" class="w-5 ml-0.5 hover:cursor-pointer" alt="trash"/> `
const add_item_button = () => `<img  onclick="add_condition_row(event)" src="/icons/add.svg" class="w-6 hover:cursor-pointer" alt="plus"/> `
window.handleFieldChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const selectedValue = target.value.trim();
    const source = conditions_candidates.find(c => c.field.trim() === selectedValue);

    if (source) {
        updateRow(source, ButtonConditionItemActionRow.DELETE_CONDITION_ITEM, target.parentElement);
    }
};
window.remove_condition_item_row = (event: MouseEvent) => {
    event.target?.parentElement.remove()
}

window.add_condition_row = (e: Event) => {
    const parser = new DOMParser()
    const container = e.target?.parentElement.parentElement;
    const _row= `<div class="flex gap-3 mt-2">${createRow(ButtonConditionItemActionRow.DELETE_CONDITION_ITEM)}</div>`
    const doc = parser.parseFromString(_row, 'text/html')
    container.appendChild(doc.body.firstElementChild)
}

window.handleSelection = (e: Event) => {
    console.log(e.target?.value, this?.value)
}
const updateRow = (source: ConditionType, action: ButtonConditionItemActionRow, rowContainer: HTMLElement | null = null) => {
    const isFirstRow = rowContainer?.parentElement?.childElementCount === 1
    let rowContent = `
        <select class="select" name="condition" onchange="handleFieldChange(event)">   
            ${conditions_candidates.map(candidate => `<option ${candidate.field === source.field ? 'selected' : ''}>${candidate.field}</option>`).join('')}
        </select>
        <select class="select" name="operator_value" onchange="handleSelection(event)">
            ${source.operators.map(operator => `<option value="${operator.value}">${operator.label}</option>`).join('')}
        </select>
        ${source.values ?
        `<select class="select" name="condition_value">
                ${source.values.map(value => `<option value="${value}">${value || '(null)'}</option>`).join('')}
            </select>` :
        `<input type="text" name="condition_value" placeholder="(null)" />`}
        
    `;
    rowContent += isFirstRow || action == ButtonConditionItemActionRow.ADD_CONDITION_ITEM ? add_item_button() : remove_item_button()
    if (!rowContainer) return rowContent
    rowContainer.innerHTML = rowContent;
};

const createRow = (action: ButtonConditionItemActionRow) => updateRow(conditions_candidates[0], action)

export {createRow};
