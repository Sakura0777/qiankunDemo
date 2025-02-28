function emptyAction() {
    // 警告：提示当前使用的是空 Action
    window.console.warn('Current execute action is empty!');
}

// 创建一个Action类
class Actions {
    // 默认值为空 Action
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction,
    };
    setActions(actions) {
        this.actions = actions;
    }

    state = {}
    setState(state){
        this.state = state
    }
    
    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args);
    }

    setGlobalState(...args) {
        return this.actions.setGlobalState(...args);
    }
}

const actions = new Actions();
export default actions;
