//mutation.js
// 第一个参数默认接收state对象
const increment = (state) => {
    state.count++
}
const decrement = (state) => {
    state.count--
}
//第二个参数接收'载荷'
const add = (state, n) => {
    state.count += n
}
const fn = (state, json) => {
    state.name = json.first + json.second + state.name
}
const addressChange = (state, newValus) => {
    state.address = newValus
}
const hobbyChange = (state, newValus) => {
    state.hobby = newValus
}
export {
    increment,
    decrement,
    add,
    fn,
    addressChange,
    hobbyChange
}