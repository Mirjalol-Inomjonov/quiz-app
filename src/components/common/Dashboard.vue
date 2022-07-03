<template>
  <aside class="aside">
    <span class="aside__logo">
      <icon-base name="logo" />
    </span>
    <!-- navbar -->
    <nav class="aside-nav">
      <ul class="aside-nav-list">
        <li v-for="(item, index) in navbar.slice(0, 3)" :key="index">
          <router-link class="aside-nav-list__item" :to="item.link">
            <icon-base :name="item.icon" />
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <ul class="aside-nav-list">
        <li v-for="(item, index) in navbar.slice(3)" :key="index">
          <router-link class="aside-nav-list__item" :to="item.link">
            <icon-base :name="item.icon" />
            {{ item.name }}
          </router-link>
        </li>
        <button class="aside-nav-list__item">
          <icon-base name="log_out" />
          Logout
        </button>
      </ul>
    </nav>
  </aside>
</template> 

<script>
import IconBase from "./IconBase.vue";
export default {
  components: { IconBase },
  data() {
    return {
      navbar: [
        {
          icon: "home",
          name: "Dashboard",
          link: "/",
        },
        {
          icon: "msg",
          name: "Test CRUD",
          link: "create-new-test",
        },
        {
          icon: "users",
          name: "Users",
          link: "#",
        },
        {
          icon: "user",
          name: "Account",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.aside {
  min-height: 100vh;
  width: 100%;
  border-right: 1px solid #edf2f7;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25%;

  // aside__logo
  &__logo {
    display: block;
    margin-bottom: 38px;
    padding: 30px 24px;
  }

  // aside-nav
  &-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 180px);

    // height: 100%;

    // aside-nav-list
    &-list {
      display: flex;
      flex-direction: column;
      gap: 7px;

      // aside-nav-list__item
      &__item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 12px 22px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #425466;
        transition: all 0.25s ease-out;
        cursor: pointer;
        width: 100%;
        border-left: 3px solid transparent;
        svg {
          rect {
            transition: all 0.25s ease-out;
          }
        }
        &:hover {
          color: #4c6fff;
          border-left-color: #4c6fff;
          svg {
            rect {
              fill: #4c6fff;
            }
          }
        }
      }
    }
  }
}
</style>