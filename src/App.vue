<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="wFlag=!wFlag">el-button</el-button>
      <w-modal :dialogVisible.sync="wFlag">123</w-modal>
      <!-- <w-input-file label="手机" mask="+1 (###) ###-####" value="2025550134" :masked="false"></w-input-file> -->
      <br />
      <w-input
        mask="### * ###"
        v-model="editableValue"
        :masked="false"
        type="text"
      ></w-input>
      <span>{{editableValue}}</span>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import wModal from "./components/w-modal.vue";
import wInputFile from "./components/w-input-file.vue";
import wInput from "./components/w-input.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    wModal,
    wInput,
    wInputFile
  },
  data() {
    return {
      wFlag: false,
      editableValue: ""
    };
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
</style>
