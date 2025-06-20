// scenelab.js

const DOM = {
    byId: id => document.getElementById(id),
    byClass: name => document.getElementsByClassName(name),

    creatEl: (type, id, classes) => {
        const el = document.createElement(type)
        el.id = id
        el.className = classes
        return el
    }
}

const defaultSceneOverlay = DOM.byId('default-text-overlay-wrapper')
const newTextOverlay = DOM.byId('new-text-overlay')

const testForm = DOM.byClass('text-overlay-form')[0]
const createTextOverlayButton = DOM.byId('create-text-overlay-button')

const activeTools = DOM.byId('active-tools')
const createdTextOverlays = DOM.byId('created-text-overlays')


// scratch me
testForm.addEventListener('submit', e => e.preventDefault(), false)

newTextOverlay.addEventListener('click', () => {
    // This will call UIForms.overlays.textOverlay
    const form = DOM.byClass('text-overlay-form')[0]
    form.style.display = "inline-block"
}, false)

createTextOverlayButton.addEventListener('click', () => {
    sceneLabTools.createTextOverlay()
}, false)



const sceneLabTools = {

    // New text overlay
    createTextOverlay: () => {

        const form = testForm
        const id = Date.now().toString()

        const name = form.elements.overlayName.value                
        const type = form.elements.elementType.value
        const text = form.elements.overlayText.value
        const color = form.elements.color.value
        const bgColor = form.elements.bgColor.value

        const newOverlay = DOM.creatEl(type, id, `${id} text-overlay`)
        newOverlay.innerText = text
        newOverlay.style.color = color
        newOverlay.style.backgroundColor = bgColor

        // pos x, pos y in relation to bounding box of scene, z-index / ordering

        defaultSceneOverlay.appendChild(newOverlay)

        UIForms.createdPanel.addItem(id, name)
        // activeTools.appendChild()


    },


}

const UIForms = {

    overlays: {

        createTextOverlayForm: () => {
            // <form class="tools-controls-ui-form text-overlay-form">
            //             <label for="elementType">HTML Type</label>
            //             <input name="elementType" type="text">

            //             <label for="overlayText">Text</label>
            //             <input name="overlayText" type="text">

            //             <label for="color">Color</label>
            //             <input name="color" type="color">
            //             <button class="new-text-overlay-button">Create</button>
            //         </form>

        }
    },

    createdPanel: {
        
        addItem: (id, name) => {
            const p = DOM.creatEl('p', id, "")
            createdTextOverlays.appendChild(p)
            p.innerText = name
        }

    }

}

// const initSceneLab = () => {


// }

// (() => { initSceneLab() })();
