/**
 * 1 defineProperty
 */

// var val = 1
// var o = {}
// Object.defineProperty(o, "a", {
//   get() {
//     console.log("get 函数")
//     return val
//   },
//   set(newVal) {
//     console.log("set 函数")
//     val = newVal
//   },
// })
// console.log("--- 1 ---")
// console.log(o.a)
// o.a = 2

/**
 * 2 劫持
 */

// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log("get")
//       return val
//     },
//     set(newVal) {
//       if (newVal !== val) {
//         console.log("set")
//         val = newVal
//       }
//     },
//   })
// }
// console.log("--- 2 ---")
// var o2 = {}
// defineReactive(o2, "a", "2")
// o2.a
// o2.a = 3

/**
 * 3 遍历劫持
 */

// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log("get")
//       return val
//     },
//     set(newVal) {
//       if (newVal !== val) {
//         console.log("set")
//         val = newVal
//       }
//     },
//   })
// }
// var o3 = {
//   a: 1,
//   b: 2,
// }
// Object.keys(o3).forEach((key) => defineReactive(o3, key, o3[key]))

// console.log("--- 3 ---")
// console.log(o3.a)
// o3.b = 3
// console.log(o3.c)
// o3.c = 4

// defineReactive(o3, "c", 5)
// console.log(o3.c)
// o3.c = 4
