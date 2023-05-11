<template>
    <section :class="[isSectionVisible ? 'animate' : '', props.type]">
        <div class="articles">
            <article ref="articleRef">
                <h2>{{ props.title }}</h2>
                <p v-for="(text, i) in props.paragraphs" :key="`paragraph-${i}`">
                    {{ text }}
                </p>
                <button v-if="props.button" class="button__secondary" :onclick="props.button.action">
                    {{ props.button.title }}
                </button>
            </article>
            <h3>{{ props.iconTitle }}</h3>
            <div class="icons">
                <a v-for="(icon, i) in props.icons"
                   :key="`icon-${i}`"
                   :href="icon.url"
                   target="_blank"
                   rel="noopener noreferrer">
                    <component :is="icon.icon" />
                </a>
            </div>
        </div>
        <UiScrollDown v-if="props.scrollRef" :scroll-ref="props.scrollRef" />
    </section>
</template>
<script setup>
import UiScrollDown from '../ui/UiScrollDown.vue';
import useElementVisibility from '../../helpers/useElementVisibility';
import { ref, defineExpose } from 'vue';

const articleRef = ref(null)
defineExpose({articleRef})
const { isTriggered: isSectionVisible } = useElementVisibility(articleRef);

const props = defineProps({
    type: String,
    title: String,
    paragraphs: Array,
    button: Object,
    iconTitle: String,
    icons: Array,
    scrollRef: Object,
})


</script>
<style lang="scss" scoped>
section {
    background: url('/img/noise_lines.png');
    width: 100%;
    color: black;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 150px 50px 50px;
    .articles {
        width: 75%;
        max-width: 1345px;
        margin: 0 auto;
        article {
            margin-bottom: 100px;
            h2 {
                font-size: 55px;
                font-weight: 500;
                background: linear-gradient(to right, #C368FF, #6AE6FF);
                background-clip: text;
                -webkit-background-clip: text;
                color: rgba(255, 255, 255, 0);
                margin: 0 0 30px;
            }
            h3 {
                background: linear-gradient(to right, #C368FF, #6AE6FF);
                background-clip: text;
                -webkit-background-clip: text;
                color: rgba(255, 255, 255, 0);
                font-size: 32px;
            }
            p {
                font-size: 24px;
                line-height: 1.6;
            }
            
        }
    }

    &.black,
    &.dark {
        color: white;
        .icons {
            svg {
                fill: white;

                &:hover {
                    opacity: 0.8;
                    cursor: pointer;
                }
            }
        }
    }
    &.black {
        background: black;
    }
    &.dark {
        background: url("/img/ep_naturalblack.png");
    }
    &.light {
        background: url('/img/noise_lines.png');

        .icons {
            svg {
                height: 100px;
                filter: brightness(0%);
                &:hover {
                    cursor: pointer;
                    filter: unset
                }
            }
        }
    }
}
h2, p {
    width: 100%;
}

.payment-providers {
    background: black
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

    &:hover {
        background-color: white;
        color: black;
    }
}

.icons {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        width: 100px;
        }

        svg {
            max-width: 100px;
            width: 100px;
        }
}
.button__secondary {
    all: unset;
    border: 3px solid #c368ff;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
    width: 150px;
    text-align: center;

    &:hover {
        background-color: #C368FF;
        color: white;
    }
}

.animate {
    h2 {
            animation: slide-in-left 1s ease;
        }

        p {
            animation: slide-in-right 1s ease;
        }
        .icons {
            animation: fade-in 1.5s ease
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
@keyframes fade-in {
    from {opacity: 0.4;}
    to {opacity: 1;}
}
@media only screen and (max-width: 1024px) {
    .articles {
        width: 100% !important;
        article {
            margin-bottom: 30px !important;
            h2 {
                font-size: 45px !important;
            }
            p {
                font-size: 20px !important;
            }
            .button__secondary {
                font-size: 20px;
            }
        }
        .icons svg,
        .icons a {
            width: 80px;
        }
    }
}

@media only screen and (max-width: 768px) {
    section {
        padding: 100px 25px;
    }
    .articles {
        article {
            h2 {
                font-size: 40px !important;
            }
            p {
                font-size: 18px !important;
            }
            .button__secondary {
                font-size: 18px;
            }
        }
        h3 {
            font-size: 16px;
        }
        .icons svg,
        .icons a {
            width: 60px;
        }
    }
}
@media only screen and (max-width: 600px) {
    .articles {
        article {
            h2 {
                font-size: 35px !important;
            }
            p {
                font-size: 16px !important;
            }
            .button__secondary {
                font-size: 16px;
            }
        }
        h3 {
            font-size: 16px;
        }
        .icons svg,
        .icons a {
            width: 30px;
        }
    }
}
</style>