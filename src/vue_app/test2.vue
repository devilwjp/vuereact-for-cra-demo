<template>
    <div class="vue-com">
        <h2>我是Vue组件</h2>
        <div>属性1 {{prop1}}</div>
        <div>属性2 {{prop2}}</div>
        <slot name="slotA"></slot>
        <slot></slot>
        <slot name="slotB"></slot>
        <slot name="slotC" :value="name"></slot>
    </div>
</template>

<script>
    export default {
        name: 'demo1',
        data () {
            return {
                name: '本地作用域'
            }
        },
        props: ['prop1', 'prop2'],
        mounted () {
            console.log(this)
            this.$emit('event1', '11', '22')
            this.$emit('input', 2222)
        }
    }
</script>
