<template>
    <div>
        <i class="fa fa-refresh fa-3x" id="resetBtn" v-if="count > 0" @click="resetCounter"/>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.getters.getCount
        }
    },
    methods: {
        resetCounter() {
            this.$store.dispatch('resetCounter')
        }
    }
}
</script>

<style>

i#resetBtn {
    position: absolute;
    right: 25px;
    top: 20px;
    color: rgba(255,255,255, .5);
    transition: color .1s ease-in 0s;
}

i#resetBtn:hover {
    color: rgba(255, 255, 255, 1);
}

</style>