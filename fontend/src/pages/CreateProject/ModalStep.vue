<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Tạo step
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Thêm mới step
      </v-card-title>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" align-self="center">
            <v-row justify="space-around">
              <date-range-picker
                v-model="dateRange"
                time-picker
                time-picker24-hour
                :locale-data="locale"
              ></date-range-picker>
            </v-row>
          </v-col>
          <v-col cols="12">
            <!-- <v-form ref="form"> -->
            <v-text-field
              v-model="name"
              :counter="200"
              label="Name"
            ></v-text-field>
            <!-- </v-form> -->
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="desription"
              rows="2"
              name="input-7-4"
              label="Desription"
            ></v-textarea>
          </v-col>
          <pick-icon :urlIcon="icon" @clicked-icon="clickIcon"></pick-icon>
          <v-col cols="12">
            <v-color-picker
              mode="hexa"
              dot-size="25"
              hide-canvas
              hide-inputs
              hide-mode-switch
              hide-sliders
              show-swatches
              swatches-max-height="150"
              width="100%"
              v-model="color"
            ></v-color-picker>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="createStep()">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import { getProjects } from '../../api/project'

import DateRangePicker from 'vue2-daterange-picker'
// you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { formatDateTime } from '../../utils/formatTime'
import PickIcon from './PickIcon'
export default {
  name: 'modal-step',
  components: { DateRangePicker, PickIcon },
  props: ['dialog', 'currentStep'],
  data: () => ({
    locale: {},
    dateRange: {
      startDate: '01/21/2021 07:00',
      endDate: '05/21/2021 09:00'
    },
    desription: '',
    // dialog: true,
    name: '',
    color: '#F44336FF',
    icon: ''
  }),
  watch: {
    currentStep () {
      console.log('------->update')

      const dateRange = {
        startDate: formatDateTime(this.currentStep.start_date),
        endDate: formatDateTime(this.currentStep.end_date)
      }

      this.name = this.currentStep.name
      this.dateRange = dateRange
      this.desription = this.currentStep.desription
      this.color = this.currentStep.color
      this.icon = this.currentStep.icon
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted')
  },

  beforeUpdate () {},

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

  computed: {
    // normalizedSize: function () {
    //   this.dateRange = this.currentStep.dateRange
    //   this.desription = this.currentStep.desription
    //   this.name = this.currentStep.name
    //   this.color = this.currentStep.color
    //   this.icon = this.currentStep.icon
    // }
  },

  methods: {
    createStep: function () {
      const step = {
        start_date: this.dateRange.startDate,
        end_date: this.dateRange.endDate,
        icon: this.urlIcon,
        text: this.name,
        color: this.color
        // desription: this.desription
      }
      this.resetForm()
      this.$emit('create-step', step)
    },

    resetForm: function () {
      // this.dateRange = {
      //   startDate: '01/21/2021 07:00',
      //   endDate: '05/21/2021 09:00'
      // },
      this.dateRange = {
        startDate: '01/21/2021 07:00',
        endDate: '05/21/2021 09:00'
      }

      this.desription = ''
      // dialog: true,
      this.name = ''
      this.color = '#F44336FF'
      this.icon = ''
    },

    clickIcon: function (url) {
      this.urlIcon = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
