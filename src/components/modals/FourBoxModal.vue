<template>
  <div class="fourBoxModal">
    <div class="left">
      <div class="leftContainer">
        <img src="/assets/images/logos/mainlogo.png" />
        <h1>Welcome!</h1>
        <h3>Please select a mode</h3>
      </div>
    </div>
    <div class="right">
      <div class="optionContainer">
        <div
          class="option"
          v-for="option in options"
          :key="option.key"
          @click="option.func(option.key)"
        >
          <img :src="option.image" />
          <div class="optionButtonContainer">
            <button class="optionSelectButton">{{ option.title }}</button>
            <div class="optionHelpButtonContainer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { switchMode } from "@/scripts/state/useState";
export default {
  name: "FourBoxModal",
  props: {
    options: Array
  },
  setup() {
    return { switchMode };
  }
};
</script>

<style scoped>
.fourBoxModal {
  height: 455px;
  width: 755px;
  display: flex;
}

.left {
  width: 40%;
  background: #1b173d;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 25px;
  position: relative;
}

.leftContainer {
  top: 30%;
  position: absolute;
  margin: 0;
  text-align: center;
  color: white;
}

.leftContainer img {
  width: 250px;
}

.right {
  width: 60%;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 6% 0;
}

.optionContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.option {
  width: 190px;
  transition: box-shadow 0.3s;
  border: solid 1px #e5e3e3;
  margin: 10px;
  text-align: center;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
}

.option img {
  height: 120px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 15px;
  margin-bottom: 35px;
  margin-top: 10px;
}

.option img:hover {
  animation: beat 0.5s infinite alternate;
}

@keyframes beat {
  to {
    transform: scale(1.05);
  }
}

.optionButtonContainer {
  display: flex;
  justify-content: center;
  align-items: baseline;
  text-align: center;
}

.optionSelectButton {
  position: absolute;
  background-color: #1b173d !important;
  left: 0;
  bottom: 0;
  border-radius: 0;
  border-bottom-left-radius: 14px;
  width: 148px;
  text-align: left;
  padding-left: 20px;
  height: 37px;
  margin: 0;
}

.optionHelpButtonContainer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 37px;
  background: #e71d64;
  text-align: center;
  border-bottom-right-radius: 14px;
}

.optionHelpButton {
  color: rgba(255, 255, 255, 0.8);
  font-size: 23px;
}
</style>
