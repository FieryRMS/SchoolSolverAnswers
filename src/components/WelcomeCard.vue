<script setup lang="ts"></script>
<template>
  <v-card class="mx-auto px-5 py-10 ma-5" outlined max-width="1080">
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center align-center">
        <v-img
          :src="ss_logo"
          alt="school Solver Logo"
          max-height="300"
          draggable="false"
          aspect-ratio="1"
        ></v-img>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <p class="text-h4 py-5 font-weight-bold text-center">
              SCHOOL SOLVER QUIZ ANSWERS
            </p>
            <p class="font-italic text-center">
              Your one stop solution to passing all the
              <a
                href="http://schoolsolver.com"
                class="text-decoration-none"
                target="_blank"
                >schoolsolver.com</a
              >
              tests!!
            </p>
          </v-col>
          <v-col cols="12">
            <v-row justify="center" class="ma-0">
              <v-col
                class="pa-1 d-flex justify-center"
                cols="3"
                v-for="url in urls"
                :key="url"
              >
                <v-avatar>
                  <v-img :src="url" draggable="false"></v-img
                ></v-avatar>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-2 d-flex justify-center">
            <v-btn
              size="x-large"
              color="blue"
              stacked
              append-icon="mdi-ethereum"
              >PAY NOW!!</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import ss_logo from "../assets/ss_logo.png";
export default {
  data() {
    return {
      ss_logo,
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
