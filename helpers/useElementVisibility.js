import { ref, onMounted, onUnmounted } from 'vue'

export default (el) => {
    const isVisible = ref(false);
    const isTriggered = ref(false);

    onMounted(() => {
        const observer = new IntersectionObserver(entries => {
            isVisible.value = entries[0].isIntersecting;
            if (!isTriggered.value) {
                isTriggered.value = entries[0].isIntersecting;
            }
        })
    
        observer.observe(el.value)
    })

/*     onUnmounted(() => {
        observer.unobserve(el.value)
    }) */

    return {
        isVisible,
        isTriggered
    }
};