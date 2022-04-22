//CSS IMPORT
const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import "expandingcards.css"
    </style>
`;





class ExpandingCards extends HTMLElement {
    constructor() {
        super();

        //RENDER HTML
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <div id="container">
                <div id="cards-container">
                    <slot name="card1"></slot>
                    <slot name="card2"></slot>
                    <slot name="card3"></slot>
                    <slot name="card4"></slot>
                    <slot name="card5"></slot>
                    <slot name="card6"></slot>
                    <slot name="card7"></slot>
                    <slot name="card8"></slot>
                    <slot name="card9"></slot>
                    <slot name="card10"></slot>
                    <slot name="card11"></slot>
                    <slot name="card12"></slot>
                </div>
            </div>
        `;

        

        //VALUES
        this.container = this.shadowRoot.querySelector('#container');
        this.cardsContainer = this.shadowRoot.querySelector('#cards-container');
        this.slot1 = this.shadowRoot.querySelector('slot[name=card1]');
        this.slot2 = this.shadowRoot.querySelector('slot[name=card2]');
        this.slot3 = this.shadowRoot.querySelector('slot[name=card3]');
        this.slot4 = this.shadowRoot.querySelector('slot[name=card4]');
        this.slot5 = this.shadowRoot.querySelector('slot[name=card5]');
        this.slot6 = this.shadowRoot.querySelector('slot[name=card6]');
        this.slot7 = this.shadowRoot.querySelector('slot[name=card7]');
        this.slot8 = this.shadowRoot.querySelector('slot[name=card8]');
        this.slot9 = this.shadowRoot.querySelector('slot[name=card9]');
        this.slot10 = this.shadowRoot.querySelector('slot[name=card10]');
        this.slot11 = this.shadowRoot.querySelector('slot[name=card11]');
        this.slot12 = this.shadowRoot.querySelector('slot[name=card12]');
        this.allSlots = this.shadowRoot.querySelectorAll('slot');
    }



    //ON COMPONENT MOUNTED
    connectedCallback() {
        //apply styles
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.container.addEventListener('click', this.expandCard);
    }



    //GET AND LISTEN TO ATTRIBUTES
    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (attributeName === 'backgroundcolor') this.container.style.backgroundColor = newValue;
    }

    static get observedAttributes() {
        return ['backgroundcolor'];
    }



    //CUSTOM METHODS
    expandCard(e) {
        if (e.target.id === "cards-container") return;
        if (e.target.id === "container") return;

        for (let item of e.target.parentElement.children) {
            if (item.classList.contains('active')) item.classList.remove('active');
        }
        e.target.classList.add('active');
    }



    //CLEAN-UP
    disconnectedCallback() {
        this.container.removeEventListener('click', this.expandCard);
    }
}



customElements.define('otj-expandingcards', ExpandingCards);