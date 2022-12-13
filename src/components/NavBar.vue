<script setup lang="ts"></script>
<template>
  <v-navigation-drawer rail permanent expand-on-hover>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
        @click="scrollTo(item.click)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", click: "home" },
        { title: "My Account", icon: "mdi-ethereum", click: "card" },
        { title: "Users", icon: "mdi-account-group-outline", click: "null" },
      ],
    };
  },
  methods: {
    scrollTo: (e: string) => {
      if (e)
        document
          .getElementById(e)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
};
</script>
