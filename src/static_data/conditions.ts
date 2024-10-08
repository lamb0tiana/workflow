import { row} from "@/lib/tools/conditions.ts";

window.remove_item_row = (event: MouseEvent) => {
    event.target?.parentElement.remove()
}

window.add_condition_row = (e: Event) => {
    const container = e.target?.parentElement.parentElement;
    container.innerHTML += `<div class="flex gap-3 mt-2">${row}<img  onclick="remove_item_row(event)" src="/icons/trash.svg" class="w-5 ml-0.5 hover:cursor-pointer" alt="trash"/> </div>`
}


const get_conditions_template = () => `
<div class="container flex flex-col gap-2">
    <div class="rows">
        <div class="flex gap-3">    
            ${row} 
             <img  onclick="add_condition_row(event)" src="/icons/add.svg" class="w-6 hover:cursor-pointer" alt="trash"/> 
        </div>
    </div>

</div>

`
export {get_conditions_template}