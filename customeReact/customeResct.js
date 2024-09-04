
/*
function customeRender(reactElement, container){
    const DomElement = document.createElement(reactElement.type)
    DomElement.setAttribute('href' , reactElement.props.href)
    DomElement.setAttribute(target, reactElement.props.target)

    container.appendChild(DomElement)
}*/

const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

const reactElement = {
    type: 'a',
    props : {
        href : 'https//google.com',
        target : '_blank'
    },
    children : 'click me to visit google '
}

const maincontainer = document.querySelector('#root');

customeRender(reactElement , maincontainer)