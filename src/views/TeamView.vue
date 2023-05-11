<template>
    <Head>
        <Title>Dream Development | Team</Title>
    </Head>
    <SectionHero
        title="Meet the Team Behind the Magic."
        description="Get to know the experts behind the Code."
        :scrollRef="firstMember"/>
    <section class="first-section">
        <article ref="firstMember">
            <img class="profile-picture" src="/img/renato-maretic.jfif" alt="">
            <div class="content" :class="{animate: isFirstMemberVisible}">
                <h2>Renato Maretić</h2>
                <h3>Founder / Software Engineer</h3>
                <p>
                    He started his software development journey in 2017 when he learned Python and Django Framework.
                    Since then he worked with various frontend and backend technologies including React, Vue, Node and
                    Symfony. He is passionate about writing clean and maintanable code, as well as about the system
                    architecture and the end product.
                </p>
                <h3>Tags</h3>
                <ul>
                    <li>Django</li>
                    <li>Python</li>
                    <li>Vue</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                </ul>
            </div>
        </article>
    </section>
</template>
<script setup>
import useElementVisibility from '../helpers/useElementVisibility';
import SectionHero from '../components/section/SectionHero.vue';
import { ref } from 'vue';

const firstMember = ref(null);
const { isTriggered: isFirstMemberVisible } = useElementVisibility(firstMember);
</script>
<style lang="scss" scoped>

.first-section {
    height: 100vh;
    background-color: black;
    color: white;
    padding: 150px 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/img/ep_naturalblack.png");

    article {
        width: 75%;
        height: 500px;
        max-width: 1345px;
        margin: 0 auto;

        display: flex;
        align-items: flex-start;

        h2 {
            font-size: 55px;
            font-weight: 500;
            background: linear-gradient(to right, #C368FF, #6AE6FF);
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(255, 255, 255, 0);
            margin: 0 0 30px;
        }

        p {
            font-size: 24px;
            line-height: 1.6;
        }
    }
}
.profile-picture {
    width: 300px;
    border-radius: 50%;
    margin: 70px;
    animation: fade-in 2s ease-in-out;
}
.content {
    h2, p, ul {
        margin-top: 120px;
    }
    &.animate {
        h2, p, ul {
            margin-top: 120px;
            animation: come-up 1.5s ease-in-out both;
        }
    }
}
ul {
    list-style: none;
    padding: 0;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        fill: white;
        width: 50px;
    }
}

@keyframes fade-in {
    from {opacity: 0.4;}
    to {opacity: 1;}
}

@keyframes come-up {
    from {
        margin-top: 90px;
        opacity: 0.4;
    }
    to {
        margin-top: 0px;
        opacity: 1;
    }
}
@media only screen and (max-width: 1280px) {
    .first-section {
        article {
            width: 100%;
            margin-top: 150px;

            .profile-picture {
                margin: 40px;
            }

            h2 {
                font-size: 45px;
            }

            p {
                font-size: 22px;
            }
            li {
                font-size: 22px;
            }
        }
    }
}

@media only screen and (max-width: 1024px) {
    .first-section {
        padding: 100px 25px 25px;
        article {
            .profile-picture {
                margin: 40px 40px 40px 0;
            }
            h2 {
                font-size: 45px;
            }

            p {
                font-size: 18px;
            }
            li {
                font-size: 18px;
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .first-section {
        padding-top: 0px;
        article {
            flex-direction: column;
            align-items: center;
            margin-top: 0px;
            .profile-picture {
                width: 150px;
                height: 150px;
                margin: 0;
            }
            h2 {
                font-size: 30px;
                text-align: center;
                margin-bottom: 10px;
            }
            h3 {
                margin: 10px 0;
                font-size: 17px;
            }

            p {
                font-size: 16px;
            }
            li {
                font-size: 16px;
            }
        }
    }
}
</style>