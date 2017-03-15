<template>
  <div>
    <div class="mainContainer">
      <Result></Result>
    </div>
    <reset-btn></reset-btn>
  </div>
</template>

<script>
import Result from './components/Result'
import ResetBtn from './components/ResetBtn'

export default {
  components: {
    Result,
    ResetBtn
  },

  data: () => ({
    bgColors: ['#609CB8', '#6AACBD', '#FFB99A', "#EF9590", "#CF594D"]
  }),

  mounted(){
      $('.mainContainer').on('click', () => {
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

  @import url('https://fonts.googleapis.com/css?family=Montserrat:700');

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
