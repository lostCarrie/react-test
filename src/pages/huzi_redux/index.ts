
interface appContent {
    text: string;
    color: string;
}

interface appState {
    title: appContent;
    content: appContent;
}

const app: appState = {
    title: {
        text: 'react 小书标题',
        color: 'red',
    },
    content: {
        text: 'react 小书内容',
        color: 'black',
    }
}

export function renderApp (app: appState) {
    renderTitle(app.title);
    renderContent(app.content);
}

function renderTitle(title: appContent) {
    const titleDom = document.getElementById('title');
    if (titleDom) {
        titleDom.innerHTML = title.text;
        titleDom.style.color = title.color;
    }
}

function renderContent(content: appContent) {
    const contentDom = document.getElementById('content');
    if (contentDom) {
        contentDom.innerHTML = content.text;
        contentDom.style.color = content.color;
    }
}

