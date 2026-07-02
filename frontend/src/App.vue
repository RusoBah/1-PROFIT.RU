<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProblemsSection from './components/sections/ProblemsSection.vue'
import CasesSection from './components/sections/CasesSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <AppHeader />

  <main>
    <HeroSection />
    <ProblemsSection />
    <AboutSection />
    <CasesSection />
    <ProcessSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>
