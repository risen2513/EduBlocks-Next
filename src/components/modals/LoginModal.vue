<template>
  <div class="loginModal">
    <div class="left">
      <div class="leftContainer">
        <img src="/assets/images/logos/mainlogo.png" />
      </div>
    </div>
    <div class="right">
      <div id="loginForm" v-if="!signUp">
        <h1 class="loginTitle">
          Login
          <a class="close" @click="closeModal">Close</a>
        </h1>
        <form>
          <label class="loginLabel">Email</label>
          <input
            type="email"
            placeholder="user@example.com"
            class="loginInput"
            v-model="emailAddr"
          />

          <label class="loginLabel">Password</label>
          <input
            type="password"
            placeholder=""
            class="loginInput"
            v-model="pwd"
          />
          <button class="loginButton" @click="signIn" type="button">
            Login
          </button>
          <a class="signUp" @click="signUp = true">Sign Up</a>
          <button
            class="socialButtons google"
            @click="googleSignIn"
            type="button"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'google']" />
            Sign in with Google
          </button>
          <button
            class="socialButtons microsoft"
            @click="microsoftSignIn"
            type="button"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'windows']" />
            Sign in with Microsoft
          </button>
          <button
            class="socialButtons apple"
            type="button"
            @click="appleSignIn"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'apple']" />
            Sign in with Apple
          </button>
        </form>
      </div>

      <div id="signUpForm" v-else>
        <h1 class="loginTitle">
          Sign Up
          <a class="close" @click="closeModal">Close</a>
        </h1>
        <form>
          <label class="loginLabel">Name</label>
          <input
            type="email"
            placeholder="John Appleseed"
            class="loginInput"
            v-model="name"
          />

          <label class="loginLabel">Email</label>
          <input
            type="email"
            placeholder="user@example.com"
            class="loginInput"
            v-model="emailAddr"
          />

          <label class="loginLabel">Password</label>
          <input
            type="password"
            placeholder=""
            class="loginInput"
            v-model="pwd"
          />
          <button class="loginButton" @click="register" type="button">
            Sign Up
          </button>
          <a class="signUp" @click="signUp = false">Login</a>
          <button
            class="socialButtons google"
            @click="googleSignIn"
            type="button"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'google']" />
            Sign in with Google
          </button>
          <button
            class="socialButtons microsoft"
            type="button"
            @click="microsoftSignIn"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'windows']" />
            Sign in with Microsoft
          </button>
          <button
            class="socialButtons apple"
            type="button"
            @click="appleSignIn"
          >
            <font-awesome-icon class="button-icon" :icon="['fab', 'apple']" />
            Sign in with Apple
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { closeModal } from "@/scripts/state/useModalState";
import { ref } from "vue";
import firebase from "firebase";
import { useToast } from "vue-toastification";

export default {
  name: "LoginModal",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const name = ref("");
    const emailAddr = ref("");
    const pwd = ref("");

    const signUp = ref(false);

    const toast = useToast();

    const register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddr.value, pwd.value)
        .then(data => {
          data.user
            .updateProfile({
              displayName: name.value
            })
            .then(() => {
              toast.success("Successfully Logged In!");
              closeModal();
            });
        })
        .catch(err => {
          toast.error(err.message, { timeout: 6000, closeButton: false });
        });
    };

    const signIn = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddr.value, pwd.value)
        .then(() => {
          toast.success("Successfully Logged In!");
          closeModal();
        })
        .catch(err => {
          toast.error(err.message, { timeout: 6000, closeButton: false });
        });
    };

    const googleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          toast.success("Successfully Logged In!");
          closeModal();
        })
        .catch(err => {
          toast.error(err.message, { timeout: 6000, closeButton: false });
        });
    };

    const appleSignIn = () => {
      const provider = new firebase.auth.OAuthProvider("apple.com");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          toast.success("Successfully Logged In!");
          closeModal();
        })
        .catch(err => {
          toast.error(err.message, { timeout: 6000, closeButton: false });
        });
    };

    const microsoftSignIn = () => {
      const provider = new firebase.auth.OAuthProvider("microsoft.com");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          toast.success("Successfully Logged In!");
          closeModal();
        })
        .catch(err => {
          toast.error(err.message, { timeout: 6000, closeButton: false });
        });
    };

    return {
      closeModal,
      name,
      emailAddr,
      pwd,
      register,
      signUp,
      signIn,
      googleSignIn,
      appleSignIn,
      microsoftSignIn
    };
  }
};
</script>

<style scoped>
.button-icon {
  margin: 0 0.6em 0 0;
}

.loginModal {
  height: 100%;
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

.card .close,
.modal .overlay ~ * .close {
  top: 0.6em;
  right: 0.7em;
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
  cursor: pointer;
}
</style>
