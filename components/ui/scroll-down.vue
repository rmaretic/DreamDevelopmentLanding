<template>
    <button class="scroll-down" @click="scrollDown(scrollRef)">
        <IconsChevronDown class="chevron" />
        <IconsChevronDown class="chevron" />
        <IconsChevronDown class="chevron" />
    </button>
</template>
<script setup>
const props = defineProps({
    scrollRef: Object
})
const scrollDown = (scrollRef) => {
    scrollRef.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
</script>
<style lang="scss" scoped>
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
</style>