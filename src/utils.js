export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
export const head = arr => arr[0]
export const tail = arr => arr.slice(1)
