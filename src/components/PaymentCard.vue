<template>
  <v-card max-width="1080" class="mx-auto px-5 py-10 ma-5 ma-5">
    <div>
      <p class="text-center text-h4 pb-10">
        Yep! You can set exactly how much you will get on the test!!
      </p>
      <p class="text-center text-h6 pb-10">
        Just set the percentage and you will get a score just >= to it!
      </p>
      <div v-for="(url, idx) in urls" :key="idx" class="d-flex py-2">
        <v-avatar class="mx-2">
          <v-img :src="url" draggable="false"></v-img
        ></v-avatar>
        <v-slider
          v-model="values[idx]"
          :min="0"
          :max="100"
          :step="1"
          thumb-label
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="values[idx]"
              hide-details
              single-line
              density="compact"
              style="width: 70px"
              :class="{
                'text-red': values[idx] < pass[idx],
                'text-green': values[idx] >= pass[idx],
              }"
            ></v-text-field>
          </template>
        </v-slider>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pass: [90, 90, 90, 90, 90, 90, 90, 90, 92],
      values: [100, 100, 100, 100, 100, 100, 100, 100, 100],
      urls: [
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/favicon.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/accounting_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/biology_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/mathematics_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/chemistry_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/physics_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/stats_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/adv_english_1.png",
        "https://schoolsolver.s3.amazonaws.com/media/quiz_images/eng_1.png",
      ],
    };
  },
};
</script>
