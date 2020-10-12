import { Observer, defineReactive } from "./Observer.js"

export default class MyVue {
  constructor(options) {
    this.$options = options

    new Observer(this)
  }
}
MyVue.set = (obj, key, val) => {
  defineReactive(obj, key, val)
}
