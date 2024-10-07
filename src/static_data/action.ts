const actions = ["affecter", "prendre rdv", "notification"]
const get_actions_template = () => `
<select class="select" >
    ${actions.map(action => `<option value="${action}">${action}</option>`).join('')}
</select>
`
export {get_actions_template}
export default actions