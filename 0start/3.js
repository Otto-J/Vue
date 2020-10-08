function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log("get")
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log("set")
        val = newVal
      }
    },
  })
}

// 要重写的方法
const arrMethods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
]

// 备份数组原来的原型
const oldPrototype = Array.prototype
// 创建一个新的
const newPrototype = Object.create(oldPrototype)

// 重写数组的方法，在旧方法的基础上增加代码
arrMethods.forEach((method) => {
  // [].push(1) 参数，也有可能是个对象或者数组
  newPrototype[method] = function (...args) {
    // 先调用原生的方法
    oldPrototype[method].apply(this, args)
  }
})

/**
 * 循环数组 对数组中的每一项进行观测
 * @param {*} target
 */
function observerArray(target) {
  for (let i = 0; i < target.length; i++) {
    // observe(target[i]) // 暂时知道要处理就可以
  }
}
