<template>
    <section class="hero-area">
        <article>
            <h2>{{ props.title }}</h2>
            <p>{{ props.description}}</p>
            <button class="button__primary" v-if="props.button" :onclick="props.button.action">{{ props.button.title }}</button>
        </article>
        <button class="scroll-down" @click="scrollDown(scrollRef)">
            <IconsChevronDown class="chevron" />
            <IconsChevronDown class="chevron" />
            <IconsChevronDown class="chevron" />
        </button>
        <UiScrollDown :scroll-ref="scrollRef" />
    </section>
</template>
<script setup>
import IconsChevronDown from '../icons/IconsChevronDown.vue';
const props = defineProps({
    title: String,
    description: String,
    button: Object,
    scrollRef: Object
})

const scrollDown = (scrollRef) => {
    scrollRef.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
</script>
<style lang="scss" scoped>
.hero-area {
    min-height: 100vh;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    article {
        width: 75%;
        max-width: 1345px;
        
        h2 {
            width: 100%;
            font-size: 55px;
            font-weight: 500;
            background: linear-gradient(to right, #C368FF, #6AE6FF);
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(255, 255, 255, 0);
            margin: 0 0 30px;
            animation: slide-in-left 1s ease;
        }

        p {
            font-size: 24px;
            width: 100%;
            line-height: 1.6;
            animation: slide-in-right 1s ease;
        }
    }
}
@keyframes slide-in-left {
    from {
        opacity: 0;
        margin-left: -100px;
    }
    to {
        opacity: 1;
        margin-left: 0px;
    }
}
@keyframes slide-in-right {
    from {
        opacity: 0;
        margin-left: 100px;
    }
    to {
        opacity: 1;
        margin-left: 0px;
    }
}
.chevron {
    height: 50px;
    fill: #6AE6FF;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: arrow 2s infinite;

    &:nth-child(1) {
        bottom: 20px;
        animation-delay:0s;
    }
    &:nth-child(2) {
        bottom: 37px;
        animation-delay:-0.5s;
    }
    &:nth-child(3) {
        bottom: 54px;
        animation-delay:-1s;
    }
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}


.scroll-down {
    all: unset;
    display: flex;
    flex-direction: column;
    bottom: 0;
    position: absolute;
    cursor: pointer;
    width: calc(100% - 50px);
    height: 100px;
}

.button__primary {
    all: unset;
    border: 3px solid white;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
    animation: show 2s ease;

    &:hover {
        background-color: white;
        color: black;
    }
}
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@media only screen and (max-width: 1024px) {
    article {
        width: 100% !important;
    }
}
@media only screen and (max-width: 768px) {
    .hero-area {
        padding: 100px 25px;
        h2 {
            font-size: 40px !important;
        }
        p {
            font-size: 18px !important;
        }
        .button__primary {
            font-size: 18px;
        }
    }
}
</style>