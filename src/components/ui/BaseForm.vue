<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  name: "BaseForm",
  components: { BaseButton },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    submitButtonText: {
      type: String,
      default: "Submit",
    },
  },
  emits: ["submit"],
  data() {
    return {
      formData: {},
    };
  },
  created() {
    this.fields.forEach((field) => {
      switch (field.type) {
        case "options":
          this.formData[field.id] = [];
          break;
        default:
          this.formData[field.id] = null;
      }
    });
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.formData);
      this.resetForm();
    },
    resetForm() {
      this.formData = {};
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <template v-for="field in fields">
      <div
        v-if="field.type === 'textarea'"
        class="form-control"
        :key="field.id"
      >
        <label :for="field.id">{{ field.label }}</label>
        <textarea rows="5" :id="field.id" v-model.trim="formData[field.id]" />
      </div>
      <div
        v-else-if="field.type === 'number'"
        class="form-control"
        :key="field.id"
      >
        <label :for="field.id">{{ field.label }}</label>
        <input
          type="number"
          :id="field.id"
          v-model.number="formData[field.id]"
        />
      </div>
      <div
        v-else-if="field.type === 'options'"
        class="form-control"
        :key="field.id"
      >
        <h3>{{ field.label }}</h3>
        <div v-for="{ id, label, value } in field.options" :key="id">
          <input
            type="checkbox"
            :id="id"
            :value="value"
            v-model="formData[field.id]"
          />
          <label :for="id">{{ label }}</label>
        </div>
      </div>
      <div v-else class="form-control" :key="field.id">
        <label :for="field.id">{{ field.label }}</label>
        <input type="text" :id="field.id" v-model.trim="formData[field.id]" />
      </div>
    </template>
    <base-button>{{ submitButtonText }}</base-button>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
