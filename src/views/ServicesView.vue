<template>
    <SectionHero title="Crafting Digital Dreams into Reality"
        description="Our team of skilled developers and designers are dedicated to bringing your dream project to life with cutting-edge technology and innovative solutions."
        :scroll-ref="dynamicWebApplicationsSectionRef?.articleRef"
        :button="{title: 'Contact us', action: 'location.href=\'mailto:dreamdevelopment.hr@aol.com?subject=Service request\''}"/>
    <SectionDefault
        ref="dynamicWebApplicationsSectionRef"
        :scroll-ref="backendSectionRef?.articleRef"
        title="Dynamic Web Applications"
        :paragraphs="['Custom web application development services that are tailored to meet the unique needs of businesses and individuals. Our team of experienced developers uses the latest technologies and industry best practices to create dynamic and interactive web applications that are scalable, secure, and user-friendly. Whether you need a simple content management system or a complex e-commerce platform, we can deliver a solution that exceeds your expectations.']"
        iconTitle="Powered by"
        type="dark"
        :icons="[
            {url: 'https://nodejs.org', icon: IconsNode},
            {url: 'https://www.php.net', icon: IconsPhp},
            {url: 'https://www.python.org', icon: IconsPython},
            {url: 'https://react.dev', icon: IconsReact},
            {url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: IconsSquareJs},
            {url: 'https://vuejs.org', icon: IconsVuejs},
        ]"/>
    <SectionDefault
        ref="backendSectionRef"
        :scroll-ref="paymentSectionRef?.articleRef"
        title="Backend Services and APIs"
        :paragraphs="['We provide wide range of services for building robust and scalable web and mobile applications. Our team of experienced backend developers specializes in creating powerful APIs, databases, and server-side technologies that power your application. We offer custom backend development services that can be seamlessly integrated with your existing front-end technology stack, helping you create a powerful and unified user experience. Whether you need a RESTful API, a cloud-based backend, or a database solution, we have the expertise to deliver top-notch results.']"
        iconTitle="Powered by"
        type="light"
        :icons="[
            {url: 'https://aws.amazon.com', icon: IconsAws},
            {url: 'https://www.heroku.com', icon: IconsHeroku},
            {url: 'https://www.postgresql.org', icon: IconsPostgresql},
            {url: 'https://www.mongodb.com', icon: IconsMongodb},
            {url: 'https://redis.io', icon: IconsRedis},
            {url: 'https://graphql.org', icon: IconsGraphql},
        ]"/>
    <SectionDefault
        ref="paymentSectionRef"
        title="Payment Providers Integration"
        :paragraphs="['Our team of experts can help you integrate payment gateways such as PayPal, Stripe, and others, allowing you to accept online payments securely and easily. We provide custom payment gateway integration solutions that cater to your unique business requirements, ensuring that your transactions are seamless, fast, and secure. Whether you are an e-commerce website or a SaaS platform, we have the expertise to help you integrate payment gateways and streamline your payment processes.']"
        iconTitle="Powered by"
        type="black"
        :icons="[
            {url: 'https://stripe.com', icon: IconsStripe},
            {url: 'https://www.paypal.com', icon: IconsPaypal},
            {url: 'https://www.skrill.com', icon: IconsSkrill},
        ]"/>
</template>
<script setup>
import SectionHero from '../components/section/SectionHero.vue';
import SectionDefault from '../components/section/SectionDefault.vue';
/* Dynamic web application section icons */
import IconsNode from '../components/icons/IconsNode.vue';
import IconsPhp from '../components/icons/IconsPhp.vue';
import IconsPython from '../components/icons/IconsPython.vue';
import IconsReact from '../components/icons/IconsReact.vue';
import IconsSquareJs from '../components/icons/IconsSquareJs.vue';
import IconsVuejs from '../components/icons/IconsVuejs.vue';
/* Backend section icons */
import IconsAws from '../components/icons/IconsAws.vue';
import IconsHeroku from '../components/icons/IconsHeroku.vue';
import IconsPostgresql from '../components/icons/IconsPostgresql.vue';
import IconsMongodb from '../components/icons/IconsMongodb.vue';
import IconsRedis from '../components/icons/IconsRedis.vue';
import IconsGraphql from '../components/icons/IconsGraphql.vue';
/* Payment providers section icons */
import IconsStripe from '../components/icons/IconsStripe.vue';
import IconsPaypal from '../components/icons/IconsPaypal.vue';
import IconsSkrill from '../components/icons/IconsSkrill.vue';

import { ref } from 'vue';

const dynamicWebApplicationsSectionRef = ref(null);
const backendSectionRef = ref(null);
const paymentSectionRef = ref(null);

</script>
<style lang="scss" scoped>

</style>