<template>
  <form @submit.prevent="" class="quiz">
    <p class="quiz__status">{{ status }}</p>
    <h1 class="quiz__question">{{ question }}</h1>

    <!-- radio button -->
    <div class="quiz__options">
      <label
        class="quiz__label"
        :class="{ active: this.selectedAnswer === key }"
        :for="key"
        v-for="(answer, key) in answers"
        :key="key"
      >
        <input
          class="quiz__input"
          type="radio"
          name="answer"
          :id="key"
          :value="key"
          @change="answered($event)"
        />
        <!-- <span class="quiz__costum-radio"></span> -->
        {{ answer }}
      </label>
    </div>
    <hr class="divider" />
    <div class="quiz-btns">
      <button
        @click="$emit('prev-question')"
        class="quiz-btns__prev btn btn_prev"
      >
        Avvalgisi
      </button>
      <button @click="nextQuestion" class="quiz-btns__next btn btn_blue">
        Keyingisi
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    status: String,
    question: String,
    answers: Object,
    correctAnswer: String,
  },
  data() {
    return {
      selectedAnswer: "",
    };
  },

  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      this.$emit("answered", this.selectedAnswer);
    },

    nextQuestion() {
      this.$emit("next-question");
      this.selectedAnswer = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  padding: 32px 24px;

  // quiz__status
  &__status {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #4c6fff;
    margin-bottom: 4px;
  }
  // quiz__question
  &__question {
    font-weight: 700;
    font-size: 20px;
    line-height: 136.02%;
    color: #27272e;
  }

  // quiz__options
  &__options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 36px;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #0a1f44;
    cursor: pointer;
    transition: color 0.25s ease-in-out;
    &.active {
      color: #4c6fff;
    }

    input[type="radio"] {
      accent-color: #4c6fff;
    }

    &:hover {
      color: #4c6fff;
    }
  }

  &-btns {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
  }

  .divider {
    margin: 40px 0 20px 0;
  }
}
</style>