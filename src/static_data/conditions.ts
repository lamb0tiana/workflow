const fields = Array.from({length: 10}, (_v, i) => 'field ' + (i + 1))
const values = Array.from({length: 10}, (_v, i) => 'value ' + (1 + i))


const operators = [
    '==', '!=', '>', '<', '>=', '<='

];
window.add_condition_row = (e: Event) => {
    const container = e.target?.parentElement.parentElement.firstElementChild;
    container.innerHTML += row
}
const row = `    <div class="flex gap-3">
        <select class="select" name="condition">
            ${fields.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
        <select class="select" name="operator_value">
            ${operators.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
        <select class="select" name="condition_value">
            ${values.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
    </div>
    `

const get_conditions_template = () => `
<div class="container flex flex-col gap-2">
<div class="rows">
    ${row}
</div>

    <div class="my-auto mx-2">
        <button class="btn" onclick="add_condition_row(event)">+</button>
    </div>
</div>

`
export {get_conditions_template}