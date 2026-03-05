<script>
export default {
  name: "BaseForm",
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
  <v-form @submit.prevent="submitForm" class="d-flex flex-column ga-2">
    <template v-for="field in fields">
      <v-textarea
        v-if="field.type === 'textarea'"
        v-model.trim="formData[field.id]"
        :key="field.id"
        :label="field.label"
        :error-messages="validationData[field.id]"
        variant="solo"
        @update:model-value="validateField(field.id)"
      />
      <v-number-input
        v-else-if="field.type === 'number'"
        v-model="formData[field.id]"
        :key="field.id"
        :label="field.label"
        :error-messages="validationData[field.id]"
        variant="solo"
        @update:model-value="validateField(field.id)"
      />
      <div v-else-if="field.type === 'options'" :key="field.id">
        <v-checkbox
          v-for="{ id, label, value } in field.options"
          v-model="formData[field.id]"
          :key="id"
          :label="label"
          :value="value"
          :error-messages="validationData[field.id]"
          color="primary"
          hide-details
          density="compact"
          @update:model-value="validateField(field.id)"
        />
      </div>
      <v-text-field
        v-else
        v-model.trim="formData[field.id]"
        :key="field.id"
        :label="field.label"
        :error-messages="validationData[field.id]"
        variant="solo"
        @update:model-value="validateField(field.id)"
      />
    </template>
    <v-btn-primary
      :text="submitButtonText"
      type="submit"
      class="mt-2 w-100"
      size="large"
    />
  </v-form>
</template>

<style scoped>
h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>
