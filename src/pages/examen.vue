<template>
  <section class="section">
    <Header title="Psixologiya bo‘yicha test">
      <template #btn>
        <div class="btns-wrapper">
          <span class="btns-wrapper__dedline">
            <IconBase name="click" /> 14:05
          </span>
          <button @click="currentComponent = 'Results'" class="btn btn_blue">
            <IconBase name="finish" /> Yakunlash
          </button>
        </div>
      </template>
    </Header>

    <div class="section-content">
      <keep-alive>
        <component
          :is="currentComponent"
          v-bind="{
            status: 'Bitta javobni tanlashingiz mumkin',
            question: questions[index]['question'],
            answers: questions[index]['answers'],
            correctAnswer: questions[index]['correctAnswer'],
            successAnswer: successAnswer,
            failerAnswer: failerAnswer,
          }"
          @prev-question="prevQuestion"
          @next-question="nextQuestion"
          @answered="answered"
        ></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import IconBase from "@/components/common/IconBase.vue";
import Examen from "@/components/cards/Examen.vue";
import Results from "@/components/cards/Results.vue";
export default {
  components: {
    Header,
    IconBase,
    Examen,
    Results,
  },

  data() {
    return {
      index: 0,
      currentComponent: "Examen",
      successAnswer: 0,
      failerAnswer: 0,

      questions: [
        {
          question:
            "Najot Ta’lim’ga qachon va qayerda, kim tomonidan asos solingan?",
          answers: {
            a: "1991-yil, 1-sentyabr. Abdurahmon Poziljonov",
            b: "2004-yil, 15-yanvar. Shohrux Bakhtiyarov",
            c: "2001-yil, 30-fevral. Jasurbek Pulatov",
          },
          correctAnswer: "b",
        },

        {
          question: "lorem ipsum",
          answers: {
            a: "lroem 1",
            b: "lroem 2",
            c: "lroem 3",
          },
          correctAnswer: "a",
        },
      ],
    };
  },


  methods: {
    prevQuestion() {
      if (this.index !== 0 && this.index <= this.questions.length) this.index--;
    },
    nextQuestion() {
      if (this.index === 0 && this.index < this.questions.length) this.index++;
    },
    answered(data) {
      if (data === this.questions[this.index]["correctAnswer"]) {
        this.successAnswer++;
      } else {
        this.failerAnswer++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background: #e5e5e5;
  .btns-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 16px;

    &__dedline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(225deg, #bb65ff 0%, #4c6fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }

  &-content {
    padding: 30px;
  }
}
</style>