class myComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["brand", "img", "title", "subtitle", "description", "price", "color"]
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if(oldVal!== newVal) {
        this[attr] = newVal
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="component">
          <div class="component__img-section">
            <h1 class="img-section__brand">${this.brand}</h1>
            <img src="${this.img}" alt="" class="img-section__img">
          </div>
          <div class="component__body-section">
            <div class="body-section__header">
                <h2 class="title">${this.title}</h2>
                <small class="subTitle">${this.subtitle}</small>
            </div>
            <p class="description"> ${this.description} </p>
            <div class="body-section__buy">
                <p class="price">$${this.price}</p>
                <button class="buy-button">BUY NOW</button>
            </div>
          </div>
        </div>
        ${this.getStyles()}
        `;
    return template;
  }
  getStyles() {
    return `
        <style>
            :host {
                --secundary-text-color: #8d8d8d;
                margin: 0;
                paddin: 0;
                font-family: sans-serif;
            }
            .component{
                display: flex;
                flex-direction: column;
                min-height: 600px;
                max-height: 900px;
                max-width: 900px;
                border: 2px solid black;
            }
            .component__img-section {
                position: relative;
                background-color: ${this.color};
            }
            .img-section__brand {
                position: absolute;
                margin: 0;
                color: #00000024;
                font-size: 100px;
                padding: 0 7%;
            }
            .img-section__img {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                min-width: 260px;
                left: 50%;
                transform: translate(-50%, 52px);
            }
            .component__body-section {
                box-sizing: border-box;
                display: grid;
                align-content: space-between;
                min-height: 280px;
                padding: 40px 5%;
                background-color: white;
            }
            
            .body-section__header h2 {
                
                display: inline;
                font-size: 40px;
            }
            .body-section__header small {
                font-family: fantasy;
                font-size: 22px;
                letter-spacing: 2px;
                color: var(--secundary-text-color);
            }
            .body-section__buy {
                justify-content: space-between;
                display: flex;
                height: 45px;
                align-items: center;
            }
            .buy-button {
                border-radius: 25px;
                width: 100px;
                height: 43px;
                font-weight: bold;
                background-color: ${this.color};
                color: #f9f9f9;
                border: none;
            }
            .price {
                font-size: 30px;
                font-weight: bold;
                color: var(--secundary-text-color);
            }
            @media (min-width: 900px) {
                .component{
                    display: flex;
                    flex-direction: row;
                }
                .component__img-section {
                    width: 50%;
                }
                .component__body-section {
                    width: 50%;
                    padding: 10% 5%;
                }
                .body-section__header small {
                    display: block;
                }
                .description {
                    padding-left: 15%;
                }
                .img-section__brand { 
                    font-size: 130px;
                }
                .img-section__img {
                    position: absolute;
                    max-width: 260px;
                    top: 50%;
                    transform: rotate(330deg) translate(-50%, -80%) scale(2.8);
                }
            }
        </style>
    `;
  }
  connectedCallback() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
}

customElements.define('my-component', myComponent);