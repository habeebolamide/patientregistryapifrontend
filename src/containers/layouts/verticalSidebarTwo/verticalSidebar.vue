<template>
  <vue-perfect-scrollbar
    class="sidebar-panel rtl-ps-none ps scroll"
    @mouseleave.native="sidebarCompact();returnSelectedParentMenu()"
    @mouseenter.native="removeSidebarCompact"
    :class="{
      'vertical-sidebar-compact': getVerticalCompact.isSidebarCompact,
      'sidebar-full-collapse': getVerticalSidebar.isMobileCompact
    }"
    :settings="{ suppressScrollX : true ,  wheelPropagation: false}"
  >
    <div>
      <div
        class="gull-brand text-center d-flex align-items-center pl-2 mb-2 justify-content-between"
      >
        <div>
          <img class src="@/assets/images/logo.png" />
        </div>
        <div class="toggle-sidebar-compact">
          <label class="switch ul-switch switch-white ml-auto">
            <input @click="switchSidebar" type="checkbox" />
            <span class="ul-slider o-hidden"></span>
          </label>
        </div>
      </div>

      <div class="close-mobile-menu" @click="mobileSidebar">
        <i class="text-16 text-white i-Close-Window font-weight-bold"></i>
      </div>

      <div class="mt-4 main-menu">
        <ul class="ul-vertical-sidebar pl-4" id="menu">
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-10>
              <a class="has-arrow" href="#" :class="{ active: selectedParentMenu == 'pages' }">
                <i class="nav-icon i-Double-Tap text-17 mr-3"></i>
                <span
                  class="text-14"
                  :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Pages</span>
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-10">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/error" class href="#">
                    <span class>Not Found</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/profile" class href="#">
                    <span class>User Profile</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/icons" class href="#">
                    <span class>icons</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/groups" class href="#">
                    <span class>Groups</span>
                  </router-link>
                </li>
                <li class="item-name">
                  <router-link tag="a" to="/app/pages/my-group" class href="#">
                    <span class>My Group</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/search-result">
                    <i class="nav-icon i-File-Search"></i>
                    <span class="item-name">
                      Search Result
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/pricing-table">
                    <i class="nav-icon i-Billing"></i>
                    <span class="item-name">
                      Pricing Table
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="a" class to="/app/pages/faq">
                    <i class="nav-icon i-Billing"></i>
                    <span class="item-name">
                      Faq
                      <span class="badge badge-pill badge-danger">New</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <!-- <p class="main-menu-title text-uppercase text-12 mt-4 mb-2">UI Elements</p>
          <li class="Ul_li--hover">
            <a class="has-arrow" href="http://demos.ui-lib.com/gull-vue-doc/">
              <i class="nav-icon i-Safe-Box1 text-17 mr-3"></i>
              <span
                class="text-14"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >Doc</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </vue-perfect-scrollbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import arrowIcon from "@/components/arrow/arrowIcon";
export default {
  components: {
    arrowIcon,
  },
  computed: {
    ...mapGetters(["getVerticalCompact", "getVerticalSidebar"]),
  },
  data() {
    return {
      selectedParentMenu: "",
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    document.addEventListener("click", this.returnSelectedParentMenu);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
  },
  methods: {
    ...mapActions([
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar",
    ]),

    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
        console.log(currentParentUrl);
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    returnSelectedParentMenu() {
      this.toggleSelectedParentMenu();
    },
  },
};
</script>
<style>
</style>