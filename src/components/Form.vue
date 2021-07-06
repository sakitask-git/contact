<template>
  <form id="form">
    <div class="unit"  v-for="(user, index) in $store.state.users" :key="index">
      <label class="title" :for="user.slug"><span class="icon">STEP.{{ index + 1 }}</span>{{ user.question }}<em v-if="user.required" class="must">必須</em></label>
      <p class="note" v-if="user.note">{{ user.note }}</p>
      <input class="text" v-if="user.type === 'text' " type="text" :name="user.title" :id="user.slug" :value="user.answer" required>
      <div class="select" v-if="user.type === 'select' ">
        <select :name="user.title" :id="user.slug" required>
          <option :value="select" v-for="(select, index) in user.selects" :key="index">
            {{ select }}
          </option>
        </select>
      </div>
      <div class="date" v-if="user.type === 'date' ">
        <datepicker :inline="true" :value="user.answer"></datepicker>
      </div>
    </div>
    <input type="text" v-model="keyword">
    <div class="agree" v-if="$store.state.settings.index.agree.flag">
      <p class="agree-title">{{ $store.state.settings.index.agree.title }}</p>
      <div class="agree-wrap">
        <div class="agree-box">
        <p class="agree-text">{{ $store.state.settings.index.agree.text }}</p>
        </div>
      </div>
    </div>
    <router-link class="submit" tag="button" to="/confirm">進む</router-link>
  </form>
</template>

<script>
import datepicker from "vuejs-datepicker";
export default {
  name: 'Form',
    components: {
        datepicker
    },
  methods: {
    setUsers(){
      this.$store.commit('change_name')
    }
  },
  computed: {
    keyword: {
      get() {
        return this.$store.getters.keyword
      },
      set(value) {
        this.$store.dispatch('getKeyword', value)
      }
    }
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  font-size: 28px;
  font-weight: normal;
  padding: 10px 0;
  margin: 50px auto 10px;
  width: 960px;
  display: flex;
  line-height: 1;
  justify-content: center;
}
.icon {
	font-size: 16px;
  background-color: #333;
	color: #fff;
	padding: 5px 30px;
	margin: 0 10px 0 0;
	line-height: 1.3;
}
.must {
  background-color: #c8161d;
  color: #fff;
  padding: 8px 34px;
  font-size: 16px;
  vertical-align: middle;
  border-radius: 5px;
}
.note {
  margin-bottom: 30px;
  text-align: center;
}
.text,
.select select {
  border: 2px solid #333;
  background-color: #f5f5f5;
  width: 960px;
  padding: 35px;
  font-size: 28px;
  margin: 0 auto 50px;
  display: block;
  border-radius: 10px;
}
.select {
  position: relative;
  width: 960px;
  margin: 0rem auto 50px;
  display: block;
  border-radius: 10px;
}
.select:before {
  position: absolute;
  top: 2.8em;
  right: 1.2em;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 1em solid transparent;
  border-right: 1em solid transparent;
  border-top: 1.2em solid #333;
  pointer-events: none;
}
.date {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.agree {
  display: block;
  margin: auto;
  width: 960px;
}
.agree-title {
  margin: 0 auto 20px;
  font-size: 28px;
  text-align: center;
}
.agree-wrap {
  width: 960px;
  margin: 30px auto 60px;
  padding: 20px;
  background-color: #f5f5f5;
}
.agree-box {
  height: 500px;
  overflow-y: scroll;
  line-height: 1.4;
}
.submit {
  display: block;
	background: #c8161d;
  width: 640px;
  margin: 0 auto;
  padding: 35px 0;
  font-size: 40px;
  line-height: 1;
  color: #ffffff;
  border-radius: 10px;
  transition: .3s;
  cursor: pointer;
}
.submit:hover {
    opacity: 0.8;		
}
</style>
<style>
.vdp-datepicker__calendar {
  padding-top: 20px;
  width: 400px !important;
}
.vdp-datepicker__calendar .cell {
  height: 60px !important;
  line-height: 60px !important;
  border: 1px solid #eee !important;
}
.vdp-datepicker__calendar .cell.selected {
  background: #c8161d !important;
  color: #fff;
}
.vdp-datepicker__calendar .cell.day-header {
  background: #f5f5f5 !important;
  height: 30px !important;
  line-height: 30px !important;
}
.vdp-datepicker__calendar .cell.sat {
  background: #bae4f6 !important;
}
.vdp-datepicker__calendar .cell.sun {
  background: #ffc9c9 !important;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #c8161d !important;
}
</style>