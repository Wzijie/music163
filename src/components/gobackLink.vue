<template>
  <a class='goback' @click='goback'>
    <i class="icon-goback"></i>
  </a>
</template>

<script>
export default {
  name: 'goback',
  data () {
    return {
      
    }
  },
  methods: {
    goback: function () {
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goback {
  display: block;
  width: 0.95rem;
  height: 0.44rem;
}

.goback .icon-goback {
  display: inline-block;
  width: 0.25rem;
  height: 0.44rem;
  background: url('../assets/images/goback.png') no-repeat;
  background-size: cover;
}
</style>
