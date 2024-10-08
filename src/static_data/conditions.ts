import {createButton, row} from "@/lib/tools/conditions.ts";

window.add_condition_row = (e: Event) => {
    const container = e.target?.parentElement.parentElement;
    const deleteButton = createButton()
    deleteButton.textContent = '-'
    deleteButton.classList.add('btn','danger')
    container.innerHTML += `<div class="flex gap-3 mt-2">${row}</div>`
    container.lastChild.append(deleteButton)
}



const get_conditions_template = () => `
<div class="container flex flex-col gap-2">
    <div class="rows">
        <div class="flex gap-3">    
            ${row}  <button class="btn" onclick="add_condition_row(event)">+</button>
        </div>
    </div>

</div>

`
export {get_conditions_template}