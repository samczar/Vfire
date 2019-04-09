<template>
  <div id="app">
    <label>Name:</label>
    <input type="text" v-model="name">
    <button @click="submitName()">Add</button>
    {{name}}
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <div v-if="!personName.edit">
            <p>
              {{personName.name}}
              <button @click="deleteName(personName['.key'])">Delete</button>
              <button @click="editName(personName['.key'])">Edit</button>
            </p>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namsRef, namesRef } from "./firebase";
export default {
  name: "app",
  data() {
    return {
      name: ""
    };
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = "";
    },
    deleteName(id) {
      namesRef.child(id).remove();
    },
    editName(id) {
      namesRef.child(id).update({ edit: true });
    },
    saveEdit(id) {
      namesRef.child(id).push();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
