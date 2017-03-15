<template>
    <div id="result">
        <p id="countDisplay">{{ getCount | isZero }}</p>
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
    },
    watch: {
        getCount() {
            let resultDisplay = $('#result')
            resultDisplay.addClass('animated pulse')
            resultDisplay.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                console.log('animation ended')
                resultDisplay.removeClass('animated pulse')
            })
            console.log("count changed")
        }
    }
}
</script>

<style scoped>

    div#result {
        margin: 0px auto;
        font-size: 100px;
        animation-duration: .2s;
    }

    p#countDisplay {
        font-family: 'Montserrat';
        user-select: none;
    }
</style>