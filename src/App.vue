<template>
  <div id="app">
    <div class="side-menu">
      <el-menu default-active="1-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <router-link to="/" slot="title">首页</router-link>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">周边商品</span>
          </template>
          <el-menu-item index="1-1">
            <i class="el-icon-menu"></i>
            <router-link to="/products" slot="title">商品管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>
            <router-link to="/brands" slot="title">品牌管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-menu"></i>
            <router-link to="/categorys" slot="title">类目管理</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">需求管理</span>
          </template>
          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>
            <router-link to="/demands" slot="title">需求管理</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item index="3-1">
            <i class="el-icon-menu"></i>
            <router-link to="/users" slot="title">用户管理</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main-wrap">
      <div class="main-header">后台管理系统</div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}

.side-menu {
  width: 13%;
  height: 100%;
  background-color: #404040;
}

.main-wrap {
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  margin-left: 20px;
}

.main-header {
  padding: 20px 24px;
  background-color: #fff;
}

.main-content {
  overflow-y: auto;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  background-color: #fff;
}
</style>
