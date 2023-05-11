<template>
    <SectionHero
        title="Unleashing the Power of Code."
        description="In our blog section, we delve into the latest trends and techniques in software development, sharing our team's knowledge and experience with our readers. From practical tips and tutorials to industry news and updates, we cover a wide range of topics to help you stay on top of your game. Join us on the journey to build better software and drive your success."
        :scrollRef="introRef?.articleRef"/>
    <SectionDefault 
        ref="introRef"
        type="dark"
        title="Coming soon"
        :paragraphs="[
            'Unfortunately, we do not have any posts in our blog section at this time. However, we are actively working to create high-quality content that provides value to our readers. We encourage you to check back soon to see our latest posts or follow us on social media to stay informed about our latest updates.',
            'In the meantime, we invite you to explore our website and learn more about our services, products, and team. If you have any questions or feedback, please do not hesitate to contact us. We appreciate your interest in our company and look forward to sharing our knowledge and expertise with you in our upcoming blog posts.']"
    />
</template>
<script setup>
import SectionHero from '../components/section/SectionHero.vue';
import SectionDefault from '../components/section/SectionDefault.vue';
import { ref } from 'vue';

const introRef = ref(null);
</script>
<style lang="scss" scoped>
</style>