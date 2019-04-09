<template>
  <div class="m-layout">
    <Layout>
      <Header :style="{ width: '100%', backgroundColor: '#2b3137'}">
        <div class="layout-logo">
          <h2 class="title">后台系统</h2>
        </div>
        <ul class="login-info">
          <li>欢迎你，{{userName}}</li>
          <li class="login-out" @click="userLoginOut">退出</li>
        </ul>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu theme="light" width="auto" :active-name="activeName" :open-names="['2']">
            <MenuItem name="model">
              <router-link :to="{ name: 'model'}">
                <Icon type="ios-podium"/>列表页
              </router-link>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content
            :style="{padding: '24px', flex: '1', background: '#fff', marginTop:'30px'}"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { loginOut } from '@/api/index'

@Component
export default class Base extends Vue {
  userName: string|null = localStorage.getItem('realName')
  activeName: string|undefined = ''
  userLoginOut(): void {
    loginOut((res: any) => {
      if (res.code === 200) {
        this.$Message.success({
          content: '退出登录',
          onClose: (): void => {
            window.location.href = '/login'
          }
        })
      }
    })
  }
  created() {
    this.activeName = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.m-layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  height: 100%;
  text-align: left;
  overflow: auto;
  .ivu-layout {
    height: 100%;
  }
  .ivu-layout-header {
    padding: 0 26px;
  }
  .login-info {
    float: right;
    margin-right: 20px;
    color: #fff;
    li {
      display: inline;
      list-style: none;
      padding-right: 10px;
    }
    .login-out {
      cursor: pointer;
    }
  }
  .layout-logo {
    width: 198px;
    height: 30px;
    float: left;
    position: relative;
    top: 10px;
    left: 0;
    .logo {
      width: 82px;
      height: 37px;
      float: left;
      margin: 4px 4px 0 0;
    }
    .title {
      color: #fff;
      line-height: 45px;
      font-size: 26px;
    }
  }

  .ivu-menu-item {
    padding: 0;
    a {
      color: #515a6e;
      padding: 14px 24px;
      display: block;
    }
    .ivu-icon {
      margin-right: 6px;
      margin-top: -4px;
    }
  }
  .ivu-menu-item-selected a {
    color: #2d8cf0;
  }
}
</style>
