<template>
  <div class="popup edit-category" v-if="editedCategory">
    <div class="popup-box">
      <div class="popup-header">
        <h4>Edit category</h4>
        <a class="close" @click="$emit('close')">X</a>
      </div>
      <div class="popup-content">
        <form @submit.prevent="editCategoryHandler">
          <div class="field">
            <label for="name">Category Name:</label>
            <input type="text" id="name" placeholder="Category Name..." v-model="editedCategory.name">
          </div>
          <div class="field">
            <label for="location">Location:</label>
            <input type="text" id="location" placeholder="Location..." v-model="editedCategory.location">
          </div>
          <div class="field">
            <label for="description">Description:</label>
            <input type="text" id="description" placeholder="Description..." v-model="editedCategory.description">
          </div>
          <button>Update category</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import categoriesMixin from '@/mixins/categories'

  export default {
    name: 'EditCategory',
    mixins: [categoriesMixin],
    props: {
      categoryId: Number
    },
    data() {
      return {
        editedCategory: null
      }
    },
    methods: {
      editCategoryHandler() {
        let dataToSend = { ...this.editedCategory };

        this.editCategory(this.categoryId, dataToSend)
          .then(() => {
            this.$emit('updated');
          })
      }
    },
    mounted() {
      this.getSingleCategory(this.categoryId)
        .then(res => {
          this.editedCategory = res.data.category;
        })
    }
  }
</script>

<style scoped>
  form {
    margin-top: 30px;
  }
  .field {
    margin-bottom: 20px;
  }
  .field label {
    display: block;
  }
  .field input {
    width: 400px;
  }
</style>