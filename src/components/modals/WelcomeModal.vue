<template>
  <div class="welcomeModal">
    <div class="left">
      <div class="leftContainer">
        <img src="/assets/images/logos/mainlogo.png" />
      </div>
    </div>
    <div class="right">
      <div class="center" v-if="currentTab === 0">
        <h1>Welcome!</h1>
        <h3>Would you like to get started or learn more about the platform?</h3>
      </div>
      <div class="center" v-if="currentTab === 1">
        <h1>Python Blocks</h1>
        <h3>
          Every block represents a line of Python Code so that you're always
          learning.
        </h3>
      </div>
      <div class="center" v-if="currentTab === 2">
        <h1>Split View</h1>
        <h3>
          You can view the generated Python code in realtime as you drag and
          drop blocks.
        </h3>
      </div>
      <div class="center" v-if="currentTab === 3">
        <h1>Multiple Platforms</h1>
        <h3>
          EduBlocks supports multiple platforms that run Python like the BBC
          micro:bit & Raspberry Pi.
        </h3>
      </div>
      <div class="center" v-if="currentTab === 4">
        <h1>Cloud Accounts</h1>
        <h3>
          You can save and share files with a free EduBlocks cloud account. This
          includes support for Teams & Classroom.
        </h3>
      </div>
      <div class="buttonContainer">
        <button
          class="outline"
          @click="openModal('PlatformSelect')"
          v-if="currentTab === 0"
        >
          Get Started
        </button>
        <button
          class="floatRight pink"
          @click="currentTab = 1"
          v-if="currentTab === 0"
        >
          Learn More
        </button>
        <div id="ClassSlideButton" v-if="currentTab !== 0">
          <button class="outline" @click="currentTab -= 1">
            Back
          </button>
          <button
            class="floatRight pink"
            @click="currentTab += 1"
            v-if="currentTab !== 4"
          >
            Next
          </button>
          <button
            class="floatRight pink"
            @click="openModal('PlatformSelect')"
            v-if="currentTab === 4"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { openModal } from "@/scripts/state/useModalState";
export default {
  name: "welcomeModal",
  setup() {
    const currentTab = ref(0);

    return { currentTab, openModal };
  }
};
</script>

<style scoped>
.welcomeModal {
  height: 480px;
  width: 755px;
  display: flex;
}

.button-icon {
  margin: 0 0.6em 0 0;
}

.left {
  width: 50%;
  background: url("/assets/images/logos/background.png") center center/cover
    no-repeat !important;
  background-color: #1b173d;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 25px;
  position: relative;
  color: white;
}

.right {
  width: 50%;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px;
}

.leftContainer {
  top: 22%;
  position: absolute;
  margin: 0;
  text-align: center;
  color: white;
  left: 0;
  right: 0;
  width: 98%;
}

.leftContainer button {
  width: 130px;
  background-color: #e71d64;
}

.leftContainer img {
  width: 300px;
  margin-top: 75px;
}

.leftContainer h1 {
  margin-bottom: 15px;
}

.close {
  font-size: 20px !important;
  margin-top: 26px;
}

.settingsTitle {
  margin-bottom: 0.8rem;
}

.card .close,
.modal .overlay ~ * .close {
  top: 0.6em;
  right: 0.7em;
}

label {
  font-weight: 700;
  cursor: auto;
  display: block;
  margin-bottom: 10px;
}

.center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  text-align: center;
}

.center h1 {
  font-size: 37px;
}

.center h3 {
  font-weight: 500;
  font-size: 17px;
}

.buttonContainer {
  margin-top: 200px;
}

.buttonContainer button {
  border-radius: 10px;
}

.floatRight {
  float: right;
}

.pink {
  background-color: #e71d64;
}

.outline {
  background-color: transparent;
  border: solid 2px lightgray;
  color: black;
}
</style>
