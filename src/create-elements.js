function createTextElement(tag = 'p', text = '', id = '',  className) {
    const element = createElement(tag, id, className)
    element.innerText = text
    return element
}

function createElement(tag = 'div', id = '', ...className) {
    const element = document.createElement(tag)
    if (id) {
        element.id = id
    }
    
    if (className[0]) {
        element.classList.add(...className)
    }
    
    return element
}

function createImg(src) {
    const img = createElement('img')
    img.src = src
    return img
}

function createMidiaElement(type='audio', src, ...attributes) { // ..atributes = ['attributeName', 'value']
    const element = createElement(type)
    element.src = src
    attributes.forEach(pair => {
       const [ attributeName, value ] = pair
       element.setAttribute(attributeName, value)
    })

    return element
}

function createAnchorElement(href, downloadAtt = false, id, ...className) {
    const element = createElement('a', id, ...className)
    element.href = href
    if (downloadAtt) element.setAttribute('download', '')
    return element
}

function createInput(type, name = '', id = '', ...attributes) { // ..atributes = ['attributeName', 'value']
    const element = createElement('input', id)
    element.type = type
    if (name) {
        element.name = name
    } 

    attributes.forEach(pair => {
        const [ attributeName, value ] = pair
        element.setAttribute(attributeName, value)
     })

    return element
}

function createLabel(htmlFor, text) {
    const element = createElement('label')
    element.htmlFor = htmlFor
    element.innerText = text
    return element
}

function createButton(text, id, ...className) {
    const element = createElement('button', id, ...className)
    element.innerText = text
    return element
}

export {createElement, createTextElement, createImg, createMidiaElement, createAnchorElement, createInput, createLabel, createButton}

