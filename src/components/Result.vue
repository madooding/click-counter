<template>
    <div id="result">
        {{ getCount | isZero }}
    </div>
</template>

<script>
export default{
    computed: {
        getCount() {
            return this.$store.getters.getCount
        }
    },
    filters: {
        isZero(number) {
            if (number == 0) {
                return "Click Anywhere"
            }
            return number
        }
    }
}
</script>

<style scoped>
    div#result {
        margin: 0px auto;
        font-size: 76px;
    }
</style>