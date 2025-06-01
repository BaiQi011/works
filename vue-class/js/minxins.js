const mixin = {
    data() {
        return {
            name: 'VueClass',
        };
    },
    methods: {
        getName() {
            console.log(this.name);
        },
    },
}
// 导出为全局变量
window.mixin = mixin;