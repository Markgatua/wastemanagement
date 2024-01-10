<script setup>
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import { useTheme } from 'vuetify'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="mdi-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div
          class="d-flex align-center cursor-pointer"
          style="user-select: none;"
        >
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="mdi-magnify" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span>
        </div>

        <VSpacer />

        <IconBtn
          class="me-2"
          href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VIcon icon="mdi-github" />
        </IconBtn>

        <IconBtn class="me-2">
          <VIcon icon="mdi-bell-outline" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Home',
          icon: 'mdi-home-outline',
          to: '/dashboard',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Onboarding',
          icon: 'mdi-plus-box-multiple-outline',
          to: '/onboard',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Aggregators',
          icon: 'mdi-account-check',
          to: '/aggregators',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Champions',
          icon: 'mdi-account-check-outline',
          to: '/account-settings',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Collection Reports',
          icon: 'mdi-chart-bar',
          to: '/account-settings',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Waste Types',
          icon: 'mdi-trash-can-outline',
          to: '/account-settings',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Waste Sales',
          icon: 'mdi-cash',
          to: '/account-settings',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Inventory',
          icon: 'mdi-animation-outline',
          to: '/account-settings',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'System users',
          icon: 'mdi-account-group',
          to: '/account-settings',
        }"
      />
    </template>

 

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
