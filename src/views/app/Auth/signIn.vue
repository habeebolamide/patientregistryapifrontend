<template>
  <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign In</h1>
              <b-form @submit.prevent="login">
                <b-form-group label="Email Address" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="text"
                    v-model="form.email"
                    email
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Password" class="text-12">
                  <b-form-input class="form-control-rounded" type="password" v-model="form.password"></b-form-input>
                </b-form-group>

                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                  >Sign In</b-button
                >-->
                <b-button
                  type="submit"
                  tag="button"
                  class="btn-rounded btn-block mt-2"
                  variant="primary mt-2"
                  :disabled="loading"
                >SignIn</b-button>
                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
                <b-button
                  to="signUp"
                  block
                  variant="primary mt-2"
                  class="btn-rounded"
                >Create an account</b-button>
              </b-form>

              <div class="mt-3 text-center">
                <router-link to="forgot" tag="a" class="text-muted">
                  <u>Forgot Password?</u>
                </router-link>
              </div>
            </div>
          </div>

          <b-col
            md="6"
            class="text-center"
            style="backgroundSize: cover;"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <router-link
                to="signUp"
                class="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </router-link>
              <a
                class="btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text"
              >
                <i class="i-Google-Plus"></i> Sign up with Google
              </a>
              <a
                class="btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook"
              >
                <i class="i-Facebook-2"></i> Sign up with Facebook
              </a>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignIn",
  },
  data() {
    return {
     form:{},
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      loading:false
    };
  },

  methods: {
    login() {
      this.loading = true
      this.$http
          .post(this.dynamic_auth_route(`/login
          `), this.form)
          .then((res) => {
            this.loading = false
            if (res.data.status == false) {
             return this.$toast.error(res.data.message,
             {position:"top-right"});
            }
            if (res.data.token) {
              console.log(res.data);
              var data = {
                auth_token: res.data.token,
                auth_user: res.data.patient,
              };
              localStorage.setItem("auth_user", JSON.stringify(data));
              localStorage.setItem("auth_token", JSON.stringify(data.auth_token));
              this.makeToastTwo("success")
              this.$router.push("/app/pages/blank")
            }
          })
          .catch((err) => {
            return this.makeToast("danger")
          })
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Email & Password does not match with our record.", {
        title: `Invalid Credentials`,
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
  },

  mounted(){
    localStorage.clear()
  }
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
