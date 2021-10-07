<template>
  <div class="home">
    <Form msg="Enter a Class Name!"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Form
  }
}
</script>
