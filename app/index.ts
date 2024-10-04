import Drawflow from 'drawflow'
// import styleDrawflow from 'drawflow/dist/drawflow.min.css'

window.addEventListener("load", (event) => {
    const id: HTMLElement = document.getElementById("drawflow") as HTMLElement;
    const editor: Drawflow = new Drawflow(id);
    var html = `
<div><input type="text" df-name></div>
`;
    var data = {"name": ''};

    editor.addNode('github', 1, 1, 150, 300, 'github', data, html, false);
});

