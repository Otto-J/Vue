/**
 * 设定数据监听
 * @param {any} obj 对象
 * @param {string} key key名
 * @param {*} val 初始值
 */
export const defineReactive = (obj, key, val) => {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // vm.a={a:1} 解决重新复制的问题
        observe(newVal)
        val = newVal

        update()
      }
    },
  })
}

const update = () => {
  // document.getElementById("#app").innerText = "xx"
}

/**
 * 对象全属性监听
 * @param {*} obj
 */
const observe = (obj) => {
  if (typeof obj !== "object" || obj === null) return // 过滤

  // 遍历
  Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]))
}

export class Observer {
  constructor(target) {
    this.$data = target.$options.data

    observe(this.$data)
  }
}
