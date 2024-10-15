import {extractFormData, generateUUID} from "@/lib/tools/functions.ts";
import {lead_fields_candidates} from "@/static_data/fields/condition.ts";
import {action_fields_candidates} from "@/static_data/fields/action.ts";
import {ConditionType, FieldType} from "@/lib/types.ts";

export enum ButtonConditionItemActionRow {
    ADD_CONDITION_ITEM = 'ADD_CONDITION_ITEM',
    DELETE_CONDITION_ITEM = 'DELETE_CONDITION_ITEM'
}

const remove_item_button = () => `<img  onclick="remove_condition_item_row(event)" src="/icons/trash.svg" class="w-5 ml-0.5 hover:cursor-pointer" alt="trash"/> `
const add_item_button = () => `<img  onclick="add_condition_row(event)" src="/icons/add.svg" class="w-6 hover:cursor-pointer" alt="plus"/> `
window.handleSelection = (e: Event) => {
    if (e.target) {
        const form = (e.target as HTMLElement).closest<HTMLElement>('form')
        extractFormData(<HTMLFormElement>form)
    }
}


window.handleFieldChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    if (target.parentElement?.parentElement) {
        const type = target.parentElement.parentElement.dataset.type
        const selectedValue = target.value.trim();
        const fields = type === ConditionType.LEAD ? lead_fields_candidates : action_fields_candidates
        const source = fields.find(c => c.field.trim() === selectedValue);
        if (source) {
            updateRow(ConditionType[type as ConditionType], ButtonConditionItemActionRow.DELETE_CONDITION_ITEM, target);
        }
    }

};
window.remove_condition_item_row = (event: MouseEvent) => {
    (event.target as HTMLElement)?.parentElement?.remove()
}

window.add_condition_row = (e: Event) => {
    const container = (e.target as HTMLElement)?.parentElement?.parentElement;
    if (container) {
        const parser = new DOMParser()
        const rowType = ConditionType[container.dataset.type as never]
        const row = `<div class="flex gap-3 mt-2">${createRow(ButtonConditionItemActionRow.DELETE_CONDITION_ITEM, rowType)}</div>`
        const doc = parser.parseFromString(row, 'text/html')
        container?.appendChild(<HTMLElement>doc.body.firstElementChild)
    }

}
window.extractFormData = extractFormData

const updateRow = (typeRow: ConditionType, action: ButtonConditionItemActionRow, selectElement: HTMLSelectElement | null = null) => {
    const fields = typeRow === ConditionType.LEAD ? lead_fields_candidates : action_fields_candidates
    const source = fields.find(f => f.field === selected) || fields[0]
    const isFirstRow = selectElement?.parentElement?.parentElement?.childElementCount === 1
    const uuid = generateUUID()
    const selected = selectElement?.value
    const rowContainer = selectElement?.parentElement
    let rowContent = `
        <select class="select" name="condition[${uuid}]" onchange="handleFieldChange(event);">   
            ${fields.map(candidate => `<option ${candidate.field === selected ? 'selected' : ''}>${candidate.field}</option>`).join('')}
        </select>
        <select class="select" name="operator[${uuid}]" onchange="extractFormData(this.closest('form'))">
            ${source.operators.map(operator => `<option value="${operator.value}">${operator.label}</option>`).join('')}
        </select>
        ${source.values && source.fieldType === FieldType.CHOICES ?
        `<select class="select" name="value[${uuid}]" onchange="extractFormData(this.closest('form'))">
                ${(source.values).map(value => `<option value="${value}">${value || '(null)'}</option>`).join('')}
            </select>` :
        `<input type="text" name="value[${uuid}]" placeholder="(null)" onchange="extractFormData(this.closest('form'))" />`}
    `;
    rowContent += isFirstRow || action == ButtonConditionItemActionRow.ADD_CONDITION_ITEM ? add_item_button() : remove_item_button()
    if (!rowContainer) return rowContent
    rowContainer.innerHTML = rowContent;
};

const createRow = (action: ButtonConditionItemActionRow, typeRow: ConditionType) => updateRow(typeRow, action)
export {createRow};
