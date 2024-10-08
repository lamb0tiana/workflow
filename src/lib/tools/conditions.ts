const fields = Array.from({length: 10}, (_v, i) => 'field ' + (i + 1))
const values = Array.from({length: 10}, (_v, i) => 'value ' + (1 + i))
const operators = [
    '==', '!=', '>', '<', '>=', '<='

];
const row = `    
        <select class="select" name="condition">
            ${fields.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
        <select class="select" name="operator_value">
            ${operators.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
        <select class="select" name="condition_value">
            ${values.map(field => `<option value="${field}">${field}</option>`).join('')}
        </select>
    `

export { row}