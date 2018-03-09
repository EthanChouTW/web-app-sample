import reducer from './todo'

describe('Todo reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                {id: 1, name: 'create static UI', isComplete: true},
                {id: 2, name: 'create initial state', isComplete: false},
                {id: 3, name: 'use static to render UI', isComplete: false},
            ]
        }
        const expectedState = {
            todos: [
                {id: 1, name: 'create static UI', isComplete: true},
                {id: 2, name: 'create initial state', isComplete: false},
                {id: 3, name: 'use static to render UI', isComplete: false},
                {id: 4, name: 'add todo', isComplete: false},
            ]
        }
        const action = {
            type: 'TODO_ADD',
            payload:  {id: 4, name: 'add todo', isComplete: false}
        }
        const result = reducer(startState, action) 
        expect(result).toEqual(expectedState)
    })
})