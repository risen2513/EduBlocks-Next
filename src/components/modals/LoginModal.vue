<template>
  <div class="loginModal">
    <div class="left">
      <div class="leftContainer">
        <img src="/assets/images/logos/mainlogo.png" />
      </div>
    </div>
    <div class="right">
      <h1 class="loginTitle">
        Login
        <a class="close" @click="closeModal">Close</a>
      </h1>
      <form>
        <label class="loginLabel">Email</label>
        <input type="email" placeholder="user@example.com" class="loginInput" />

        <label class="loginLabel">Password</label>
        <input type="password" placeholder="" class="loginInput" />
        <button class="loginButton">Login</button>
        <a class="signUp">Sign Up</a>
        <button class="socialButtons google">
          <font-awesome-icon class="button-icon" :icon="['fab', 'google']" />
          Sign in with Google
        </button>
        <button class="socialButtons microsoft">
          <font-awesome-icon class="button-icon" :icon="['fab', 'windows']" />
          Sign in with Microsoft
        </button>
        <button class="socialButtons apple">
          <font-awesome-icon class="button-icon" :icon="['fab', 'apple']" />
          Sign in with Apple
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { closeModal } from "@/scripts/state/useModalState";

export default {
  name: "LoginModal",
  components: {
    FontAwesomeIcon
  },
  setup() {
    return { closeModal };
  }
};
</script>

<style scoped>
.button-icon {
  margin: 0 0.6em 0 0;
}

.loginModal {
  height: 490px;
  width: 755px;
  display: flex;
}

.left {
  width: 45%;
  background: url("/assets/images/logos/background.png") center center/cover
    no-repeat !important;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 25px;
  position: relative;
  color: white;
}

.leftContainer {
  top: 30%;
  position: absolute;
  margin: 0;
  text-align: center;
  color: white;
}

.leftContainer img {
  width: 290px;
  margin-top: 40px;
}

.right {
  width: 55%;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px;
}

.loginInput {
  margin-top: 6px;
  margin-bottom: 20px;
}

.loginTitle {
  margin-bottom: 10px;
}

.loginButton {
  float: right;
  display: block;
  margin-bottom: 20px;
}

.socialButtons {
  display: block;
  width: 70%;
  margin-left: 50px;
}

.microsoft {
  background-color: #e7e7e7;
  color: black;
}

.google {
  background-color: #dd4b39;
}

.apple {
  background-color: black;
}

.close {
  font-size: 20px !important;
  margin-top: 26px;
}

.signUp {
  margin-top: 10px;
  float: right;
  margin-right: 20px;
  margin-bottom: 30px;
  display: block;
}
</style>
