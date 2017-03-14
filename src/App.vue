<template>
  <div class="mainContainer">
    <Result></Result>
  </div>
</template>

<script>
import Result from './components/Result'

export default {
  components: {
    Result
  },

  data: () => ({
    bgColors: ['#609CB8', '#6AACBD', '#FFB99A', "#EF9590", "#CF594D"]
  }),

  mounted(){
      $(document).on('click', () => {
        this.increment()
        this.changeBackgroundColor()
      })
  },

  methods: {
    changeBackgroundColor() {
      $("body").css("background-color", this.bgColors[this.getCount % this.bgColors.length])
    },
    increment(){
      this.$store.dispatch('incrementCounter', 1)
    }
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount
    }
  }

}
</script>

<style>

  * {
    padding: 0px;
    margin: 0px;
  }

  body {
    color: #FFFFFF;
    background-color: #B7E8D8;
    transition: background-color .15s linear 0s;
  }

  div.mainContainer {
    width : 100%;
    height : 100vh;
    display: flex;
    align-items: center;
    vertical-align: middle;
  }

</style>
