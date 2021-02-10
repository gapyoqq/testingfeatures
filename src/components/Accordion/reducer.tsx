type StateType = {
    collapsed: boolean
}

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

type ActionType = {
    type: string
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_COLLAPSED) {
        return {
            ...state,
            collapsed: !state.collapsed
        }
    }
    return {...state}
}


export let toggleCollapsedAC = () => ({type: TOGGLE_COLLAPSED})
