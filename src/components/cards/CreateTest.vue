<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form-top">
      <h2 class="form-top__title">Bir nechta variant tanlanuvchi savol</h2>
      <div class="flex-center gap-4 mb-7">
        <button @click="addOptions" class="btn">
          <icon-base name="plus_blue" color="#16192C" />
          Yana qo‘shish
        </button>
        <button class="btn btn_trash">
          <icon-base name="trash" />
        </button>
      </div>
    </div>

    <!-- inputs -->
    <div>
      <label class="form__label" for="question">Savol nomi</label>
      <!-- question input -->
      <input
        v-model="form.question"
        class="form__input"
        type="text"
        id="question"
        placeholder="Savol nomini kiriting"
        autocomplete="off"
      />
    </div>

    <!-- options input -->
    <ul class="form-options">
      <label class="form__label">Variantlar</label>
      <li
        v-for="(item, index) in form.options"
        :key="index"
        class="form-options__item"
      >
        <input
          v-model="item.correct"
          :value="item.correct"
          type="radio"
          name="option"
          autocomplete="off"
        />
        <input
          v-model="item.answer"
          class="form__input"
          type="text"
          placeholder="Javobingizni kiriting"
          autocomplete="off"
        />
        <button @click="removeOption" class="form-options__remove-btn">
          <icon-base name="close" />
        </button>
      </li>
    </ul>
  </form>
  <pre>{{ form }}</pre>
</template>

<script>
import IconBase from "@/components/common/IconBase.vue";
export default {
  components: { IconBase },

  data() {
    return {
      form: {
        question: "",
        options: [
          {
            answer: "",
            correct: false,
          },
          {
            answer: "",
            correct: false,
          },
        ],
      },
    };
  },

  watch: {},

  methods: {
    addOptions() {
      console.log("qo'shildi");
      this.form.options.push({
        answer: "",
        correct: false,
      });
    },

    removeOption() {
      this.form.options.shift();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  padding: 20px 24px;

  // form-top
  &-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;

    // form-top__title
    &__title {
      font-weight: 600;
      font-size: 24px;
      line-height: 136.02%;
      color: #27272e;
    }
  }

  // fprm__label
  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #425466;
    display: inline-block;
    margin-bottom: 8px;
  }

  // form__input
  &__input {
    font-weight: 500;
    font-size: 15px;
    line-height: 15px;
    color: #7a828a;
    padding: 14px 16px;
    background: rgba(237, 242, 247, 0.25);
    border: 1px solid #edf2f7;
    border-radius: 6px;
    width: 100%;
  }

  // form-options
  &-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 31px;

    // form-options__item
    &__item {
      display: flex;
      align-items: center;
      gap: 10px;

      input[type="radio"] {
        accent-color: #4c6fff;
        width: 32px;
        height: 32px;
        cursor: pointer;
      }

      &:last-child {
        .form-options__remove-btn {
          display: block;
        }
      }
    }
    // form-options__remove-btn
    &__remove-btn {
      display: none;
    }
  }
}
</style>