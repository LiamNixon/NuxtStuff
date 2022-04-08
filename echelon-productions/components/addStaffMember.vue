<template>
  <div>
      <div class="flex flex-col flex-nowrap w-full">
      <label for="iName" class="w-1/6 text-black font-bold underline">Staff name: </label>
      <input id="iName" v-model="iName" class="w-1/6 bg-neutral-100 border border-neutral-300 rounded">
      <label for="iRole" class="w-1/6 text-black font-bold underline">Staff role:</label>
      <input id="iRole" v-model="iRole" class="w-1/6 bg-neutral-100 border border-neutral-300 rounded">
      <br>
      <span v-if="error" class="text-red-500 font-semibold">ERROR, please fill both input fields</span>
      </div>
      <div class="flex flex-row flex-nowrap w-1/6 justify-end">
      <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 border border-red-700 rounded transition-transform hover:-translate-y-1 hover:scale-110 active:translate-y-0.5 active:bg-red-400 duration-75" @click="addStaff">
        Add staff to list
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      iName: '',
      iRole: '',
      errorText: false
    }
  },

  methods: {
    addStaff () {
      if (this.iName !== '' && this.iRole !== '') {
        const newStaff = {
          name: this.iName,
          role: this.iRole
        }
        this.$emit('addStaffMember', newStaff)
        this.error = false
      } else {
        this.error = true
      }
      this.iName = ''
      this.iRole = ''
    }
  }
}

</script>
