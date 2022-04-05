<template>
  <div>
    <ul>
      <li v-for="(member, i) in staff" :key="i">
        {{ member.name }}, {{ member.role }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    staff: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
    }
  },

  methods: {
  }
}

</script>

<style>

</style>
