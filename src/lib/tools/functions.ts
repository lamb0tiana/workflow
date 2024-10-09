import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const generateUUID = () => 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});


const extractFormData = (form: HTMLFormElement): Record<string, Record<string, string>> => {
    const values: Record<string, Record<string, string>> = {};

    for (const element of form.elements) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
            if (element.name) {
                const match = element.name.match(/^(?<name>[^[]+)\[(?<uuid>.+)\]$/);
                if (match && match.groups) {
                    const {name, uuid} = match.groups;

                    // Crée l'objet pour l'UUID s'il n'existe pas
                    if (!values[uuid]) {
                        values[uuid] = {};
                    }

                    // Assigne la valeur au champ correspondant
                    values[uuid][name] = element.value;
                }
            }
        }
    }
    console.log(values)
    return values;
};

const notify = (message: string, duration: number = 2000, class_name: string | null = null) => {
    Toastify({
        text: message,
        duration,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        className: class_name || ''
    }).showToast();
}

export {generateUUID, extractFormData, notify}