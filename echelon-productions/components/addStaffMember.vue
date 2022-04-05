<template>
  <div>
    <label for="iName">Staff name: </label>
    <input id="iName" v-model="iName">
    <br>
    <label for="iRole">Staff role:</label>
    <input id="iRole" v-model="iRole">
    <br>
    <button type="submit" @click="addStaff">
      Add staff to list
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      iName: '',
      iRole: ''
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
      }
      this.iName = ''
      this.iRole = ''
    }
  }
}

</script>
