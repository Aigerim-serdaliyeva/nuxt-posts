<template>
  <div>
    <el-form
      :style="{width: '600px'}"
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2 class="mb">Создать новый пост</h2>

      <el-form-item label="Введите название поста" prop="title">
        <el-input
          v-model="controls.title" />
      </el-form-item>

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          resize="none"
          rows="8"
          v-model="controls.text" />
      </el-form-item>

      <el-button class="mb" type="success" plain @click="previewDialog = true">Предпросмотр</el-button>

      <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown>
        </div>
      </el-dialog>

      <el-upload
        class="mb"
        drag
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImgChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Ператащите картинку <em>или нажимайте</em></div>
        <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
      </el-upload>

      <el-form-item>
        <el-button
          type="primary"
          plain
          round
          :loading="loading"
          native-type="submit"
        >Создать пост</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { async } from 'q';
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
      },
      rules: {
        title: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleImgChange(file,fileList) {
      this.image = file.raw
    },
    onSubmit() {
      this.$refs.form.validate( async (valid) => {
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост успешно создан')
            this.loading = false
          } catch(err) {

          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
        }

      })
    }
  }
}
</script>
