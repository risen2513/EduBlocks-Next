<template>
  <img
    v-if="user.photoURL"
    :src="user.photoURL"
    class="profileImage"
    @click="signOut"
  />
  <img
    v-else
    src="/assets/images/global/default-profile-image.png"
    class="profileImage"
    @click="signOut"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import firebase from "firebase";

export default defineComponent({
  name: "UserMenu",
  setup() {
    const user = ref(firebase.auth().currentUser);

    const signOut = () => {
      firebase.auth().signOut();
    };

    return { user, signOut };
  }
});
</script>

<style scoped>
.profileImage {
  height: 38px;
  cursor: pointer;
  border-radius: 100%;
}
</style>
