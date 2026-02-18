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
    validationSchema: {
      type: Object,
      required: true,
    },
  },
  emits: ["submit"],
  data() {
    return {
      formData: {},
      validationData: {},
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
    async submitForm() {
      const isValid = await this.validateForm();
      if (isValid) {
        this.$emit("submit", this.formData);
      }
    },
    async validateForm() {
      this.validationData = {};
      try {
        await this.validationSchema.validate(this.formData, {
          abortEarly: false,
        });
        return true;
      } catch (error) {
        error.inner.forEach(({ path, message }) => {
          this.validationData[path] = message;
        });
        return false;
      }
    },
    async validateField(fieldId) {
      try {
        await this.validationSchema.validateAt(fieldId, this.formData);
        delete this.validationData[fieldId];
      } catch (error) {
        this.validationData = {
          ...this.validationData,
          [fieldId]: error.message,
        };
      }
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
        :class="{ invalid: this.validationData[field.id] }"
        :key="field.id"
      >
        <label :for="field.id">{{ field.label }}</label>
        <textarea
          rows="5"
          :id="field.id"
          v-model.trim="formData[field.id]"
          @blur="validateField(field.id)"
        />
        <p v-if="this.validationData[field.id]" class="error-message">
          {{ this.validationData[field.id] }}
        </p>
      </div>
      <div
        v-else-if="field.type === 'number'"
        class="form-control"
        :class="{ invalid: this.validationData[field.id] }"
        :key="field.id"
      >
        <label :for="field.id">{{ field.label }}</label>
        <input
          :type="field.type"
          :id="field.id"
          v-model.number="formData[field.id]"
          @blur="validateField(field.id)"
        />
        <p v-if="this.validationData[field.id]" class="error-message">
          {{ this.validationData[field.id] }}
        </p>
      </div>
      <div
        v-else-if="field.type === 'options'"
        class="form-control"
        :class="{ invalid: this.validationData[field.id] }"
        :key="field.id"
      >
        <h3>{{ field.label }}</h3>
        <div v-for="{ id, label, value } in field.options" :key="id">
          <input
            type="checkbox"
            :id="id"
            :value="value"
            v-model="formData[field.id]"
            @blur="validateField(field.id)"
          />
          <label :for="id">{{ label }}</label>
        </div>
        <p v-if="this.validationData[field.id]" class="error-message">
          {{ this.validationData[field.id] }}
        </p>
      </div>
      <div
        v-else
        class="form-control"
        :class="{ invalid: this.validationData[field.id] }"
        :key="field.id"
      >
        <label :for="field.id">{{ field.label }}</label>
        <input
          :type="field.type"
          :id="field.id"
          v-model.trim="formData[field.id]"
          @blur="validateField(field.id)"
        />
        <p v-if="this.validationData[field.id]" class="error-message">
          {{ this.validationData[field.id] }}
        </p>
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

.error-message {
  color: red;
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: bold;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
