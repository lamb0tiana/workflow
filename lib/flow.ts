import Drawflow from "drawflow";

const handleDrag = (id: HTMLElement, editor: Drawflow) => {
    const paletteItems = document.querySelectorAll('#palette .node');
    paletteItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.getAttribute('data-type'));
            e.dataTransfer.effectAllowed = "move";
        });
    });
    id.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
        if (e?.dataTransfer) e.dataTransfer.dropEffect = "move";
    });

    id.addEventListener('drop', (e: DragEvent) => {
        e.preventDefault();
        const type = e?.dataTransfer?.getData('text/plain') as string;
        const rect = id.getBoundingClientRect();
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;

        // Ajoute le node à Drawflow
        editor.addNode(type, 1, 1, x, y, '', {}, type, false);
    });
}

export {handleDrag}