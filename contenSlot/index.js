class myComponent extends HTMLElement {
    constructor() {
        super()
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class="container">
            <slot name="title"></slot>
            <slot name="paragraph"></slot>
        </section>
        ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
                .container {
                    width: 100%;
                    max-width: 350px;
                    background-color: var(--background-color);
                }
            </style>
        `
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
};

customElements.define("my-component", myComponent);