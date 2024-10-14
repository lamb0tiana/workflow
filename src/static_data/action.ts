import {editor} from "@/main.ts";
import {selectionId} from "@/lib/editor.ts";

const actions = ["Affecter", "Réaffecter", "Appel émis", "Appel reçu", "Prendre un RDV", "Enregistrer commande", "Enregistrer un email", "Enregistrer un sms", "Envoyer un email", "Envoyer un sms", "Compte rendu", "Enregistrer un échec", "Abandonner", "Envoyer un email", "Suivre un RDV non honoré", "Suivre un RDV honoré", "Proposition envoyée"]
window.handleActionChange = (e: Event) => {
    if (e.target) {
        editor.updateNodeDataFromId(selectionId, {action: (e.target as HTMLSelectElement).value})
    }
}
const get_actions_template = () => `
<select class="select" onchange="handleActionChange(event)">
    ${actions.map(action => `<option value="${action}">${action}</option>`).join('')}
</select>
`
export {get_actions_template}
export default actions