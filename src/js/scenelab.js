// scenelab.js

const DOM = {
    byId: id => document.getElementById(id),
    byClass: name => document.getElementsByClassName(name),
}

const defaultSceneOverlay = DOM.byId('default-text-overlay-wrapper')
const testBrbButton = DOM.byId('brb-button')

testBrbButton.addEventListener('click', () => {
    scenLabTools.brb('test overlay... BRB')
}, false)

const scenLabTools = {

    // Click New -> get create menu
    // Click New Text Overlay
    // NOTE: new user defined elements via tools get a generated DOM id
        // textarea where you can just type text and choose element type
        // or h1, h2, p, link, etc.
        // color, font, custom css


    // Click BRB <-- testing/dev
    brb: text => {
        const messageEl = document.createElement('h1')
        messageEl.innerText = text
        defaultSceneOverlay.appendChild(messageEl)
    }

}

// const initSceneLab = () => {


// }

// (() => { initSceneLab() })();
