<template>
    <Head>
        <Title>Dream Development | Services</Title>
    </Head>
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
            {url: 'https://nodejs.org', icon: node},
            {url: 'https://www.php.net', icon: php},
            {url: 'https://www.python.org', icon: python},
            {url: 'https://react.dev', icon: react},
            {url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: squareJs},
            {url: 'https://vuejs.org', icon: vuejs},
        ]"/>
    <SectionDefault
        ref="backendSectionRef"
        :scroll-ref="paymentSectionRef?.articleRef"
        title="Backend Services and APIs"
        :paragraphs="['We provide wide range of services for building robust and scalable web and mobile applications. Our team of experienced backend developers specializes in creating powerful APIs, databases, and server-side technologies that power your application. We offer custom backend development services that can be seamlessly integrated with your existing front-end technology stack, helping you create a powerful and unified user experience. Whether you need a RESTful API, a cloud-based backend, or a database solution, we have the expertise to deliver top-notch results.']"
        iconTitle="Powered by"
        type="light"
        :icons="[
            {url: 'https://aws.amazon.com', icon: aws},
            {url: 'https://www.heroku.com', icon: heroku},
            {url: 'https://www.postgresql.org', icon: postgresql},
            {url: 'https://www.mongodb.com', icon: mongodb},
            {url: 'https://redis.io', icon: redis},
            {url: 'https://graphql.org', icon: graphql},
        ]"/>
    <SectionDefault
        ref="paymentSectionRef"
        title="Payment Providers Integration"
        :paragraphs="['Our team of experts can help you integrate payment gateways such as PayPal, Stripe, and others, allowing you to accept online payments securely and easily. We provide custom payment gateway integration solutions that cater to your unique business requirements, ensuring that your transactions are seamless, fast, and secure. Whether you are an e-commerce website or a SaaS platform, we have the expertise to help you integrate payment gateways and streamline your payment processes.']"
        iconTitle="Powered by"
        type="black"
        :icons="[
            {url: 'https://stripe.com', icon: stripe},
            {url: 'https://www.paypal.com', icon: paypal},
            {url: 'https://www.skrill.com', icon: skrill},
        ]"/>
</template>
<script setup>
/* Dynamic web application section icons */
import node from '../components/icons/node';
import php from '../components/icons/php';
import python from '../components/icons/python';
import react from '../components/icons/react';
import squareJs from '../components/icons/square-js';
import vuejs from '../components/icons/vuejs';
/* Backend section icons */
import aws from '../components/icons/aws';
import heroku from '../components/icons/heroku';
import postgresql from '../components/icons/postgresql';
import mongodb from '../components/icons/mongodb';
import redis from '../components/icons/redis';
import graphql from '../components/icons/graphql';
/* Payment providers section icons */
import stripe from '../components/icons/stripe';
import paypal from '../components/icons/paypal';
import skrill from '../components/icons/skrill';

const dynamicWebApplicationsSectionRef = ref(null);
const backendSectionRef = ref(null);
const paymentSectionRef = ref(null);

</script>
<style lang="scss" scoped>

</style>