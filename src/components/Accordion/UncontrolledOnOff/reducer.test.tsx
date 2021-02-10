import {reducer, toggleCollapsedAC} from "../reducer";

test('should change value to opposite', ()=> {
    let state = {
        collapsed: false
    }

    let newState = reducer(state,toggleCollapsedAC())
    expect(newState.collapsed).toBe(true)
})


