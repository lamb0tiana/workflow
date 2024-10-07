const fields = Array.from({length: 10}, (_v, i) => 'field ' + (i + 1))
const values = Array.from({length: 10}, (_v, i) => 'value ' + (1 + i))


const operators = [
    '==', '!=', '>', '<', '>=', '<='

];


export {fields, values, operators}