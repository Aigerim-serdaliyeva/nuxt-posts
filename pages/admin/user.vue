<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
    :style="{width: '500px'}"
  >
    <h2>Создать пользователя</h2>

    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>

    <el-form-item class="mb2" label="Пароль" prop="password">
      <el-input
        v-model.trim="controls.password"
        type="password"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        plain
        round
        :loading="loading"
        native-type="submit"
      >Создать</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import { async } from 'q';
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
      return {
        loading: false,
        controls: {
          login: '',
          password: ''
        },
        rules: {
          login: [
            { required: true, message: 'Введите логин', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 4, message: 'Пароль должен быть не менее 4 символов', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async (valid) => {
          if(valid) {
            this.loading = true

            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              }

              await this.$store.dispatch('auth/createUser', formData)
              this.$message.success('Новый пользователь добавлен')
              this.controls.login = ""
              this.controls.password = ""
              this.loading = false
            }
            catch(err) {
              this.loading = false
            }
          }
        })
      }
    }
}
</script>
