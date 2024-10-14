import {editor} from "@/main.ts";
import {selectionId} from "@/lib/editor.ts";

const actions = ["affecter crc", "prendre rdv", "notification"]
window.handleActionChange = (e: Event) => {
    if(e.target){
        editor.updateNodeDataFromId(selectionId, {action: e.target.value})
    }
}
const get_actions_template = () => `
<select class="select" onchange="handleActionChange(event)">
    ${actions.map(action => `<option value="${action}">${action}</option>`).join('')}
</select>
`
export {get_actions_template}
export default actions