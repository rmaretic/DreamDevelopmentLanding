<template>
    <Head>
        <Title>Dream Development | Careers</Title>
    </Head>
    <SectionHero
        title="Unlock Your Potential, Discover Your Dream with Us."
        description="Explore our opportunities and take the first step towards a fulfilling and successful career."
        :button="{title: 'Open positions'}"
        :scrollRef="openApplicationRef?.articleRef"/>
    <SectionDefault
        title="Open Application"
        ref="openApplicationRef"
        :paragraphs="['We are always on the lookout for talented individuals to join our team and contribute to our company\'s growth. If you have a passion for what we do and want to be part of a dynamic and innovative team, then we invite you to submit an open job application. We look forward to hearing from you and exploring potential opportunities together.']"
        type="dark"
        :button="{title: 'Apply now', action: 'location.href=\'mailto:dreamdevelopment.hr@aol.com?subject=Job Application \''}"
    />
</template>
<script setup>
const openApplicationRef = ref(null);

</script>