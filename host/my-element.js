
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    };
    static get observedAttributes() {
        return ["title", "paragraph", "img"]
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if(oldVal !== newVal) {
            this[attr] = newVal
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.paragraph}</p>
            </div>
        </section>
        ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 220px;
                    max-width: 320px;
                    font-size: 20px;
                    background-color: salmon;
                }
                :host(.blue) {
                    background-color: cornflowerblue;
                }
                :host([yellow]) {
                    background-color: lightyellow;
                }
                :host-context(article.card) {
                    display: block;
                    max-width: 100%;
                }
                :host-context(article.card) h2 {
                    color: white;
                }
            </style>
        `
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
};

customElements.define('my-element', myElement);