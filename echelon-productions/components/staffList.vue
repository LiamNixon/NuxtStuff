<template>
  <div>
    <ul class="w-1/2 grid grid-cols-3">
      <li v-for="(member, i) in staff" :key="i" class="shadow-md py-4 w-5/6 flex flex-col justify-start">
        <span class="pl-4 font-bold text-lg">{{ member.name }}</span>
        <span class="pl-4 text-neutral-400 text-sm">{{ member.role }}</span>
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
