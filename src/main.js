import { getElem, getMod } from './bem';

export default {
  install(Vue) {
    Vue.mixin({
      created() {
        this.block = this.$options.block || this.$options.name;
      },
      methods: {
        bem(blockName, element, modifier) {
          return getMod(modifier, getElem(element, blockName || this.block));
        },
        bemElem(element, modifier) {
          return getMod(modifier, getElem(element, this.block));
        },
        bemMod(modifier) {
          return getMod(modifier, this.block);
        }
      }
    });
  }
};
