<template>
  <div class="form">
    <h1>{{ msg }}</h1>
    <form @submit="onSubmit()">
      Class Name: <input v-model="className" required :disabled="disabled" />
      <button>Submit</button>
      <p>{{ errorMsg }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Form",
  props: {
    msg: String,
  },
  data() {
    return {
      className: "",
      errorMsg: "",
      disabled: false
    };
  },
  methods: {
    /*
    Limiting inputs with special characters, based on the link below.
    https://firebase.google.com/docs/firestore/best-practices
    Also, empty inputs are not allowed as the form is set to be required.
    */
    onSubmit() {
      const invalidArray = [".", "[", "]", "*", "`"];
      let invalid = "";
      let isValidated = true;
      if (this.className.length == 0) {
        isValidated = false;
      }
      for (let k = 0; k < this.className.length; k++) {
        if (!isValidated) break;
        for (let inv = 0; inv < invalidArray.length; inv++) {
          if (this.className[k] == invalidArray[inv]) {
            isValidated = false;
            invalid = invalidArray[inv];
            break;
          }
        }
      }
      if (isValidated) {
        this.disabled = true
        axios
          .post(
            "https://us-central1-vibefam-activity.cloudfunctions.net/classNameSubmit",
            {
              className: this.className,
            }
          )
          .then((response) => {
            this.className = ""
            this.errorMsg = ""
            this.disabled = false
            console.log(response)
          })
          .catch((error) => {
            this.disabled = false
            console.error(error)
          });
      } else {
        if (invalid !== "") {
          this.errorMsg =
            '"' + invalid + '"' + " is not a permitted character.";
          console.error("Error! Your input contains invalid value: " + invalid);
        }
      }
    },
  },
};
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
