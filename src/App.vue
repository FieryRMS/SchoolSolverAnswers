<script setup lang="ts">
import NavBarVue from "./components/NavBar.vue";
import WelcomeCard from "./components/WelcomeCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
</script>
<template>
  <v-app>
    <NavBarVue v-if="$vuetify.display.mdAndUp" />
    <v-main>
      <WelcomeCard id="home" />
      <PaymentCard id="card" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      //
    };
  },
};
</script>
<style>
a:link {
  color: rgb(0, 191, 255);
}

a:visited {
  color: rgb(0, 191, 255);
}

a:hover {
  color: rgb(0, 168, 224);
}

a:active {
  color: rgb(0, 142, 189);
}
.v-img[draggable="false"] > img {
  pointer-events: none;
}
</style>
