// // action.js处理一些异步操作
// // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
// let incrementAsync = (content) => {
//     setTimeout(() => {
//         content.commit('increment')
//     }, 1000)
// }
// let decrementAsync = (content) => {
//     setTimeout(() => {
//         content.commit('decrement')
//     }, 1000)
// }
// export {
//     incrementAsync,
//     decrementAsync
// }

// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
let incrementAsync = (content) => {
    return new Promise((resolve, reject) => {
        // 这里可以写一些请求、定时器等异步操作
        setTimeout(() => {
            content.commit('increment')
            resolve(content)
        }, 1000)
    })
}
let decrementAsync = (content) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            content.commit('decrement')
            resolve()
        }, 2000)
    })
}
export {
    incrementAsync,
    decrementAsync
}