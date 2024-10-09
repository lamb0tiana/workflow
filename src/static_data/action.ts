import {editor, selectionId} from "@/main.ts";

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