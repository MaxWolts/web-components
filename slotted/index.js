class myComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <slot name="title"></slot>
            <slot name="paragraph"></slot>
        </section>
        ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
            <style>
                ::slotted(*) {
                    text-decoration: underline;
                    width: 300px
                }
                ::slotted(h1) {
                    color: cornflowerblue;
                }
                ::slotted(.paragraph) {
                    background-color: salmon;
                    font-size: 18px;
                    color: white;
                }
            </style>
        `
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
};

customElements.define("my-component", myComponent);