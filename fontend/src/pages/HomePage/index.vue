<template>
  <v-container>
    <v-row dense>
      <v-col cols="4" v-for="project in projects" :key="project.id">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ project.id }}
          </v-card-subtitle>
          <v-card-actions>
            <router-link :to="{ path: '/project/' + project.id }">
              <v-btn
                elevation="2"
                icon
                outlined
                medium
              >
                <v-icon>fa fa-eye</v-icon>
              </v-btn>
            </router-link>
             <router-link :to="{ path: '/edit-project/' + project.id }">
            <v-btn
              elevation="2"
              icon
              outlined
              medium

            >
              <v-icon>fa fa-edit</v-icon>
            </v-btn>
             </router-link>
            <v-btn
              color="red"
              elevation="2"
              icon
              outlined
              medium
              dark
              @click="chooseProject(project.id)"
            >
              <v-icon>fa fa-trash</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            Bạn có muốn xóa
          </v-card-title>
          <v-card-text>{{ currentProject.name }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="resetModal()">
              Hủy
            </v-btn>
            <v-btn color="green darken-1" text @click="deleteByProjectId()">
              Xóa
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { deleteProject, getProjects } from '../../api/project'

export default {
  name: 'List project',
  data: () => ({
    dialog: false,
    projects: [],
    currentProject: {}
  }),

  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
    this.getProject()
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted')
    // this.getProject()
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

  computed () {
    console.log('===>', this.projects)
  },

  watch () {
    console.log('chạy owrr watch ')
  },

  methods: {
    getProject: async function () {
      // `this` trỏ tới đối tượng vm
      this.loading = true
      try {
        const { data } = await getProjects()
        if (data.data.getProjects) {
          this.projects = data.data.getProjects
        }
      } finally {
        this.loading = false
      }
    },

    viewProjectDetail: id => {
      console.log('id', id)

      console.log('this.$router', this.$router)
      // this.$router.push('/non-existing')
    },

    chooseProject: function (id) {
      this.dialog = true
      const project = this.projects.find(item => item.id === id)
      this.currentProject = project
    },
    resetModal: function () {
      this.dialog = false
      this.currentProject = {}
    },

    deleteByProjectId: async function () {
      try {
        await deleteProject(this.currentProject.id)
        this.getProject()
        this.resetModal()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
