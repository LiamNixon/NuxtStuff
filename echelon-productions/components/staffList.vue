<template>
  <div>
    <p>{{ currentYear }}</p>
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
  computed: {
    currentYear () {
      return this.$dayjs().format('YYYY')
    }
  },
  methods: {
    // ...
  }
}

</script>

<style>

</style>
