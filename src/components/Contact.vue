<template>
  <div class="tokyo_tm_contact">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>Contact</span>
          <h3 v-if="seen_fields">Get in Touch</h3>
          <div v-else>
            <h3>It's great to hear from you! </h3>
            <p>Thanks for inquiring about my services.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Title -->

    <div class="fields" v-if="seen_fields">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form class="contact_form" @submit.prevent="handleSubmit(onSubmit)">
          <div class="first">
            <ul>
              <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
              >
                <li>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Name"
                    autocomplete="off"
                  />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>

              <ValidationProvider
                name="email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <li>
                  <input
                    type="email"
                    rules="required|email"
                    v-model="formData.email"
                    placeholder="Email"
                  />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider
                name="message"
                rules="required"
                v-slot="{ errors }"
              >
                <li>
                  <textarea
                    v-model="formData.message"
                    placeholder="Message"
                  ></textarea>
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
            </ul>
          </div>
          <div class="tokyo_tm_button">
            <button type="submit" class="ib-button">Send Message</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <!-- END FIELDS -->
  </div>
</template>

<script>
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  import axios from 'axios';

  export default {
    components: {
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        formData: { 
          name: "",
          email: "",
          message: "",
        },
        seen_fields: true,
      };
    },
    methods: {
      onSubmit() {
        axios.get(`https://eouqndqwx0q4na1.m.pipedream.net?name=${this.formData.name}&email=${this.formData.email}&message=${this.formData.message}`)
          .then(response => console.log(response)).then(this.resetForm())
          .catch(error => {
            console.error("There was an error!", error);
          });
      },

      resetForm() {
        // Note: There is an error in console with this code from line 110 - 116
          this.formData.name = "";
          this.formData.email = "";
          this.formData.message = "";

          this.seen_fields = false;

          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });
      },
    },
  };
</script>
