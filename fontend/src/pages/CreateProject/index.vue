<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          label="Tên dự án"
          outlined
          dense
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-btn color="orange lighten-2" @click="createProject">
        Tạo dự án
      </v-btn>
      <modal-step
        :dialog="dialog"
        @create-step="createStep"
        :currentStep="currentStep"
      ></modal-step>
      <v-col cols="2" v-for="step in listStep" :key="step.icon">
        <v-card class="mx-auto" max-width="150">
          <v-img :src="step.icon" height="100px"></v-img>
          <v-card-title>
            {{ step.name }}
          </v-card-title>

          <v-chip close-icon="mdi-delete" :color="step.color"> {{step.color}}</v-chip>
          <v-card-actions>
            <!-- <router-link :to="{ path: '/project/' + project.id}"> -->
            <v-btn color="orange lighten-2" text @click="editStep(step)">
              Xem chi tiết
            </v-btn>
            <!-- </router-link> -->
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createproject, getProjectbyId } from '../../api/project'

import ModalStep from './ModalStep'
export default {
  name: 'create-project',
  components: { ModalStep },
  data: () => ({
    listStep: [],
    dialog: false,
    name: '',
    currentStep: null
  }),

  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
    console.log('=====>', this.$route)
    const { id } = this.$route.params
    if (id) {
      this.getProject()
    }
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted')
  },

  beforeUpdate () {
    console.log('beforeUpdate', this.projects)
  },

  updated () {
    console.log('updated')
  },

  activated () {
    console.log('activated')
  },

  deactivated () {
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },

  methods: {
    createStep: function (step) {
      this.listStep.push(step)
      this.dialog = false
    },

    createProject: async function () {
      const newProject = {
        name: this.name,
        steps: this.listStep
      }

      console.log('newProject', newProject)

      const { data } = await createproject(newProject)
      console.log('data', data)
    },

    getProject: async function () {
      const { id } = this.$route.params
      const dataReponse = await getProjectbyId(id)
      const { name, steps } = dataReponse.data.data.getProjectById
      this.name = name
      this.listStep = steps
    },
    editStep: function (step) {
      this.dialog = true
      this.currentStep = step
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
