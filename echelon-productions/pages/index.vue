<template>
  <div>
    <h3 class="font-bold underline">
      Staff list for Echelon Productions:
    </h3>

    <staffList :staff="staff" />
  </div>
</template>

<script>
import staffList from '~/components/staffList.vue'

export default {
  name: 'IndexPage',

  components: {
    staffList
  },

  data () {
    return {
      staff: [
        { name: 'Jack Sumner', role: 'Developer', id: 1 },
        { name: 'Liam Nixon', role: 'Digital Coordinator', id: 2 },
        { name: 'Nick Goudie', role: 'Guy Who Tells Me What To Do', id: 3 },
        { name: 'Tobias Benn', role: 'Da Boss', id: 4 }
      ]

    }
  }

}
</script>
