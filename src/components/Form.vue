<template>
  <div class="form">
    <h1>{{ msg }}</h1>
    <form @submit="onSubmit()">
      Class Name: <input v-model="classname" required>
      <button> Submit </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      classname: ""
    }
  },
  methods: {
    onSubmit() {
      if (this.classname != "") {
        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
