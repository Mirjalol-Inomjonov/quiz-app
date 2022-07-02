<template>
  <main class="container auth-wrapper">
    <div class="auth-wrapper__content">
      <div class="auth-wrapper__logo">
        <Icon-base name="logo" />
      </div>
      <div>
        <div>
          <h1 class="auth-wrapper__title">Create your account</h1>
          <p class="auth-wrapper__subtitle">It’s free and easy</p>
        </div>

        <!-- form -->
        <form class="form" @submit.prevent="onSubmit">
          <div v-for="(item, index) in formTexts" :key="index">
            <label :for="'input' + index" class="form__label">{{
              item.label
            }}</label>
            <input
              v-model="form[item.value]"
              class="form__input"
              :class="{ '!border-red-500': v$.form[item.value].$error }"
              type="text"
              :name="'input' + index"
              :id="'input' + index"
              :placeholder="item.placeholder"
              autocomplete="off"
            />
            <p v-if="index === 2" class="form__password-warning">
              Must be 8 characters at least
            </p>
          </div>
          <vue-recaptcha
            ref="invisibleRecaptcha"
            sitekey="6Lccz5AfAAAAAMfAgL8ca29KZ8hLOJoS7iTwDN4b"
            :load-recaptcha-script="true"
            @verify="form.recaptchaError = false"
            @expired="onExpired"
            size="invisible"
            :class="v$.form.recaptchaError.$error ? 'recapthaError' : ''"
          />
          <button class="form__btn">Register</button>
        </form>
        <!-- <pre>{{ form }}</pre> -->
      </div>
    </div>
  </main>
</template>

<script>
import IconBase from "../components/common/IconBase.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { VueRecaptcha } from "vue-recaptcha";
import { useToast } from "vue-toastification";

export default {
  components: { IconBase, VueRecaptcha },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      toast: useToast(),
      form: {
        fullName: "",
        email: "",
        password: "",
        recaptchaError: undefined,
      },

      formTexts: [
        {
          value: "fullName",
          label: "Full name",
          placeholder: "Enter your name",
        },
        {
          value: "email",
          label: "E-mail",
          placeholder: "Type your e-mail ",
        },
        {
          value: "password",
          label: "Password",
          placeholder: "Type your password",
        },
      ],
    };
  },
  validations() {
    return {
      form: {
        fullName: { required },
        email: { required, email },
        password: { required },
        recaptchaError: { required },
      },
    };
  },
  methods: {
    onSubmit() {
      // this.v$.form.$touch();
      const result = this.v$.$validate();
      console.log(result, 'result');
      if (result) {
        this.toast.error("My toast content");
        this.$refs.invisibleRecaptcha.execute();
      }
      // if (!this.v$.form.$error) {
      //   axios
      //     .post(`/application`, {
      //       category: this.category,
      //       question_author_phone: `+998${this.form.phone}`,
      //       title: this.form.topic,
      //       question: this.form.message,
      //       question_author: this.form.name,
      //     })
      //     .then(() => {
      //       this.showToastSent();
      //     })
      //     .catch((error) => {
      //       let errorMsg = error.response.data.question_author_phone[0];
      //       this.showToastError(errorMsg);
      //     });
      // }
    },

    onVerify(response) {
      console.log("Verify: " + response);
    },

    onExpired() {
      console.log("Expired");
    },

    showToastSent() {
      this.toast.success("Muvaffaqiyatli jo'natildi");
    },

    showToastError(msg) {
      this.toast.error(msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  &__content {
    grid-column: 5 / 9;
  }

  // auth-wrapper__logo
  &__logo {
    text-align: center;
    margin-bottom: 64px;
  }

  // auth-wrapper__title
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 136.02%;
    text-align: center;
    color: #27272e;
    margin-bottom: 12px;
  }

  // auth-wrapper__subtitle
  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 162.02%;
    text-align: center;
    color: #27272e;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    &__label {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      align-items: center;
      color: #425466;
      display: inline-block;
      margin-bottom: 8px;
      cursor: pointer;
    }

    &__input {
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      color: #7a828a;
      background: #edf2f7;
      border-radius: 6px;
      padding: 14px 16px;
      display: block;
      width: 100%;
      transition: all 0.25s ease-in-out;
      border: 1px solid transparent;
      &:hover {
        border-color: #425466;
      }

      &:focus-visible {
        border-color: #425466;
      }
    }

    &__btn {
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      color: #ffffff;
      background: #4c6fff;
      border-radius: 8px;
      padding: 16px 0;
      text-align: center;
      width: 100%;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }

    &__password-warning {
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      color: #7a7a9d;
      margin-top: 8px;
    }
  }
}
</style>