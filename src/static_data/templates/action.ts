import {editor} from "@/main.ts";
import {selectionId} from "@/lib/editor.ts";
import {actions} from "@/static_data/fields/action.ts";

window.handleActionChange = (e: Event) => {
    if (e.target) {
        editor.updateNodeDataFromId(selectionId, {action: (e.target as HTMLSelectElement).value})
    }
}
const get_actions_template = (): string => `
<select class="select" onchange="handleActionChange(event)">
    ${actions.map(action => `<option value="${action}">${action}</option>`).join('')}
</select>
`
export {get_actions_template}