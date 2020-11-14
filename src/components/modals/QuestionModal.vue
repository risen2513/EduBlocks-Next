<template>
  <div class="modalContainer">
    <div class="modalBody">
      <h2>{{ title }}</h2>
      <h4>{{ body }}</h4>
    </div>
    <div class="buttonContainer">
      <a>
        <img src="assets/images/global/yes.png" @click="yesFunc" />
      </a>
      <a>
        <img src="assets/images/global/no.png" @click="noFunc" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "questionmodal",
  props: {
    yesFunc: Function,
    noFunc: Function,
    title: String,
    body: String
  }
};
</script>

<style scoped>
.modalContainer {
  width: 600px;
}

.modalBody {
  width: 450px;
  float: left;
  height: 175px;
  margin: auto;
  position: relative;
  border-radius: 15px;
  padding: 20px;
  background-color: #1b173d;
  color: white;
}

.modalBody h2 {
  padding: 0;
}

.modalBody h4 {
  font-weight: 100;
}

.buttonContainer {
  width: 130px;
  margin-left: 15px;
  height: auto;
  float: left;
}

.buttonContainer img {
  height: 77px;
  margin-top: 4.5px;
  margin-bottom: 2px;
  cursor: pointer;
}

.buttonContainer img:hover {
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}
</style>
