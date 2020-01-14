// 测试时用此文件替换src/index.tsx

interface appContent {
    text: string;
    color: string;
}

interface appState {
    title: appContent;
    content: appContent;
}

function createStore(reducer:any) {
    let state:any = null;
    let listeners: any[] = [];
    const subscribe = (listener: any) => listeners.push(listener);
    const getState = () => {
        return state;
    }
    const dispatch = (action: any) => {
        state = reducer(state, action);
        listeners.map( listener => listener());
    }
    dispatch({});
    return {getState, dispatch, subscribe};
}

function stateChanger(state:any, action: any) {
    if (!state) {
        return {
            title: {
                text: 'react 小书标题',
                color: 'red',
            },
            content: {
                text: 'react 小书内容',
                color: 'black',
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text,
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.text,
                    color: action.color,
                }
            }
        default:
            return state;

    }
}

function renderApp(app: appState, oldapp: Partial<appState>={}) {
    if (app === oldapp) return;
    console.log('render app')
    renderTitle(app.title, oldapp.title);
    renderContent(app.content, oldapp.content);
}

function renderTitle(title: appContent, oldtitle: Partial<appContent>={}) {
    if (title === oldtitle) return;
    console.log('render title')
    const titleDom = document.getElementById('title');
    if (titleDom) {
        titleDom.innerHTML = title.text;
        titleDom.style.color = title.color;
    }
}

function renderContent(content: appContent, oldcontent: Partial<appContent>={}) {
    if (content === oldcontent) return;
    console.log('render content')
    const contentDom = document.getElementById('content');
    if (contentDom) {
        contentDom.innerHTML = content.text;
        contentDom.style.color = content.color;
    }
}

const store = createStore(stateChanger);
let oldstate = store.getState();
store.subscribe(()=>{
    const newstate = store.getState();
    renderApp(newstate, oldstate);
    oldstate = newstate;
});
renderApp(store.getState());
store.dispatch({type:'UPDATE_TITLE_TEXT',text: 'React 小书标题》'});
store.dispatch({type:'UPDATE_TITLE_COLOR',color: 'blue'});
store.dispatch({type:'UPDATE_TITLE_TEXT',text: '《React 小书标题》'});
export { }