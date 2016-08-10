export * from './react-router-utils'
export * from './http-utils'
export * from './redux-utils'

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant
        return acc
    }, {})
}
