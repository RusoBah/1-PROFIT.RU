<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProblemsSection from './components/sections/ProblemsSection.vue'
import CasesSection from './components/sections/CasesSection.vue'
import DirectionsSection from './components/sections/DirectionsSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import SoftwareSection from './components/sections/SoftwareSection.vue'
</script>

<template>
  <AppHeader />

  <main>
    <HeroSection />
    <ProblemsSection />
    <AboutSection />
    <CasesSection />
    <DirectionsSection />
    <ProcessSection />
    <SoftwareSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>
