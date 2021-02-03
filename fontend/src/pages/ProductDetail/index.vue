<template>
  <v-container>
    <div class="project-detail" ref="chartdiv"></div>
    <v-row dense> </v-row>
  </v-container>
</template>

<script>
import { getProjectById } from '../../api/project'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import * as am4pluginsBullets from '@amcharts/amcharts4/plugins/bullets'
import * as am4pluginsTimeline from '@amcharts/amcharts4/plugins/timeline'
import { formatDateTime } from '../../utils/formatTime'

// Themes
am4core.useTheme(am4themesAnimated)

export default {
  name: 'Project-detail',
  data: () => ({
    project: {},
    steps: []
  }),

  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    // console.log('created===>', this.$route.params.username)
    // console.log(this)
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted==============>')
    this.getProject(this.$route.params.id)
    this.renderChart()
  },

  beforeUpdate () {
    // console.log('beforeUpdate', this.projects)
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
    if (this.chart) {
      this.chart.dispose()
    }
  },
  destroyed () {
    console.log('destroyed')
  },

  computed () {
    console.log('computed===>', this.projects)
  },

  watch () {
    console.log('chạy owrr watch ')
  },

  methods: {
    getProject: async function (id) {
      const { data } = await getProjectById(id)
      const dataStep = data.data.getProjectById.steps.map(item => {
        console.log('formatDateTime(item.start_date)', formatDateTime(item.start_date))
        return {
          ...item,
          category: '',
          start: formatDateTime(item.start_date),
          end: formatDateTime(item.end_date)
        }
      })

      this.project = data.data.getProjectById

      this.chart.data = dataStep
      this.label.text = data.data.getProjectById.name
      // this.steps = dataStep
    },

    renderChart: function () {
      let chart = am4core.create(
        this.$refs.chartdiv,
        am4pluginsTimeline.SerpentineChart
      )
      chart.curveContainer.padding(100, 20, 50, 20)
      chart.levelCount = 3
      chart.yAxisRadius = am4core.percent(20)
      chart.yAxisInnerRadius = am4core.percent(2)
      chart.maskBullets = false
      chart.fontSize = 10
      chart.tooltipContainer.fontSize = 10

      // let colorSet = new am4core.ColorSet()

      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH:mm'
      chart.dateFormatter.dateFormat = 'HH'

      /// ///

      chart.fontSize = 10
      chart.tooltipContainer.fontSize = 10

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'category'
      categoryAxis.renderer.grid.template.disabled = true
      categoryAxis.renderer.labels.template.paddingRight = 25
      categoryAxis.renderer.minGridDistance = 10

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.minGridDistance = 70
      dateAxis.baseInterval = { count: 30, timeUnit: 'minute' }
      dateAxis.renderer.tooltipLocation = 0
      dateAxis.renderer.line.strokeDasharray = '1,4'
      dateAxis.renderer.line.strokeOpacity = 0.5
      dateAxis.tooltip.background.fillOpacity = 0.2
      dateAxis.tooltip.background.cornerRadius = 5
      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground')
      dateAxis.tooltip.label.paddingTop = 7
      dateAxis.endLocation = 0
      dateAxis.startLocation = -0.5

      let labelTemplate = dateAxis.renderer.labels.template
      labelTemplate.verticalCenter = 'middle'
      labelTemplate.fillOpacity = 0.4
      labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor('background')
      labelTemplate.background.fillOpacity = 1
      labelTemplate.padding(7, 7, 7, 7)

      let series = chart.series.push(new am4pluginsTimeline.CurveColumnSeries())
      series.columns.template.height = am4core.percent(15)

      series.dataFields.openDateX = 'start'
      series.dataFields.dateX = 'end'
      series.dataFields.categoryY = 'category'
      series.baseAxis = categoryAxis
      series.columns.template.propertyFields.fill = '#fff' // get color from data
      series.columns.template.propertyFields.stroke = 'color'
      series.columns.template.strokeOpacity = 0
      series.columns.template.fillOpacity = 0.6

      let imageBullet1 = series.bullets.push(new am4pluginsBullets.PinBullet())
      imageBullet1.locationX = 1
      imageBullet1.propertyFields.stroke = 'color'
      imageBullet1.background.propertyFields.fill = 'color'
      imageBullet1.image = new am4core.Image()
      imageBullet1.image.propertyFields.href = 'icon'
      imageBullet1.image.scale = 0.5
      imageBullet1.circle.radius = am4core.percent(100)
      imageBullet1.dy = -5

      let textBullet = series.bullets.push(new am4charts.LabelBullet())
      textBullet.label.propertyFields.text = 'text'
      textBullet.disabled = true
      textBullet.propertyFields.disabled = 'textDisabled'
      textBullet.label.strokeOpacity = 0
      textBullet.locationX = 1
      textBullet.dy = -100
      textBullet.label.textAlign = 'middle'

      chart.scrollbarX = new am4core.Scrollbar()
      chart.scrollbarX.align = 'center'
      chart.scrollbarX.width = am4core.percent(75)
      chart.scrollbarX.opacity = 0.5

      let cursor = new am4pluginsTimeline.CurveCursor()
      chart.cursor = cursor
      cursor.xAxis = dateAxis
      cursor.yAxis = categoryAxis
      cursor.lineY.disabled = true
      cursor.lineX.strokeDasharray = '1,4'
      cursor.lineX.strokeOpacity = 1

      dateAxis.renderer.tooltipLocation2 = 0
      categoryAxis.cursorTooltipEnabled = false

      let label = chart.createChild(am4core.Label)
      label.text = 'Tung test amchart'
      label.isMeasured = false
      label.y = am4core.percent(40)
      label.x = am4core.percent(50)
      label.horizontalCenter = 'middle'
      label.fontSize = 20
      this.label = label
      this.chart = chart
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

.project-detail {
  width: 100%;
  height: 500px;
}
</style>
