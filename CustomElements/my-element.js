
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    };
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>Hola mundo</h2>
            <div>
                <p>Soy un texto de ejemplo</p>
            </div>
        </section>
        ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
            <style>
                h2 {
                    color: blue;
                }
            </style>
        `
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
};

customElements.define('my-element', myElement);