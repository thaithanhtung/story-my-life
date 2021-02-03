<template>
<v-container>
  <v-row justify="space-around">
    <!-- <v-col> -->
      <v-btn fab outlined small v-for="icon in icons" :key="icon.id" @click="chooseIcon(icon)" :color="isSelected ===icon.id ? 'primary':''" >
        <v-img
          contain
          :lazy-src="icon.url"
          max-height="24"
          max-width="24"
          :src="icon.url"
        ></v-img>

      </v-btn>
    <!-- </v-col> -->
  </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'pick-icon',
  data: () => {
    return {
      isSelected: '',
      icons: [
        {
          id: 1,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2FDrink-1.svg?alt=media'
        },
        {
          id: 2,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Falarm.svg?alt=media&'
        },
        {
          id: 3,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fbed.svg?alt=media&'
        },
        {
          id: 4,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fbeer.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 5,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fbook.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 6,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fcar.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 7,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fcoffee.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 8,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fdinner.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 9,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fexercise.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 10,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fhome.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 11,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Ficon_breakfast-01.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 12,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fwater.svg?alt=media&',
          name: 'drink'
        },
        {
          id: 13,
          url:
            'https://firebasestorage.googleapis.com/v0/b/store-my-life.appspot.com/o/icon%2Fwork.svg?alt=media&',
          name: 'drink'
        }
      ]

    }
  },

  methods: {

    chooseIcon: function (icon) {
      this.isSelected = icon.id
      this.$emit('clicked-icon', icon.url)
    }

  }
}
</script>
