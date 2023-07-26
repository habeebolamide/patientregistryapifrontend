<template>
  <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <b-col md="12">
            <div class="p-4">
              <h1 class="mb-3 text-18">Reset Password</h1>
              <b-form @submit.prevent="submit">

                <b-form-group label="Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model="form.password"
                  ></b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.form.password.minLength"
                  >
                    Minimum
                    {{ $v.form.password.$params.minLength.min }} characters.
                  </b-alert>
                </b-form-group>

                <b-form-group label="Repeat Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model="form.repeatPassword"
                  ></b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.form.repeatPassword.sameAsPassword"
                  >Passwords must be identical {{ $v.form.repeatPassword.sameAsPassword }}.</b-alert>
                </b-form-group>

                <b-button
                  type="submit"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                >Sign Up</b-button>

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  <!-- {{ this.$router.push("/") }} -->
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">{{ makeToast("danger") }}</p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import axios from 'axios'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignUp",
  },

  data() {
    return {
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      submitStatus: null,
      form:{}
    };
  },

  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
      },
      repeatPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
  },

  computed: {
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },

  methods: {
    ...mapActions(["signUserUp"]),
    //   validate form
    submit() {
      console.log("submit!");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.form.token = this.$route.params.token;
         axios
        .post(this.dynamic_auth_route(`resetpassword`), this.form)
        .then((res) => {
          this.submitStatus = "OK";
          this.$router.push("/")
        })
        .catch((err) => {
        })
        .finally(() => {
        });
        // setTimeout(() => {
        //   this.submitStatus = "OK";
        // }, 1000);
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Created Account", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      console.log("submitted");
    },
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>


