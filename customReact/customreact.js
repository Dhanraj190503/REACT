
const createElement = (myElement, My_Container)=>{

    const createTag = document.createElement(myElement.tag);
    createTag.innerText = myElement.text;
    for (const prop in myElement.props) {
       createTag.setAttribute(prop, myElement.props[prop]);
    }
    My_Container.appendChild(createTag);
    return createTag;
}

const myElement = {
    tag: "h1",
    props:{
        style: 'background-color:yellow;color:red',
        class:'my-class',
    },
    text: "Hello World!",
}

const My_Container = document.querySelector("#root");

createElement(myElement, My_Container);