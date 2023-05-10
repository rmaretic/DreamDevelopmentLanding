<template>
        <header :class="{active: open}">
            <nav>
                <div class="logo-container">
                    <NuxtLink to="/">
                        <h3>&lt;DreamDevelopment /&gt;</h3>
                    </NuxtLink>
                    <button class="hamburger-menu" @click="open = !open">
                        <i/>
                        <i />
                    </button>
                </div>
                <ul>
                    <li>
                        <NuxtLink to="/">Services</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/team">Team</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/careers">Careers</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
           <slot />
        </main>
</template>
<script setup>
const open = ref(false);
const router = useRouter();

router.beforeEach((to, from) => {
    open.value = false;
})
</script>
<style lang="scss" scoped>
header {
    background: rgba(0,0,0,0.9);
    position: fixed;
    z-index: 1;

    nav {
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        font-size: 32px;
        .logo-container {
            a {
                all: unset;
            }
            h3 {
                font-weight: 700;
                margin: 0 1em;
                overflow: hidden;
                white-space: nowrap; 
                border-right: 2px solid #6AE6FF;
                padding-right: 10px;
                width: 490px;
                animation: blink-caret .75s step-end infinite, typing 5s steps(40, end);
                cursor: pointer;
            }
            .hamburger-menu {
                display: none;
            }
        }
    }
}
ul {
    display: flex;
    padding: 0;
}
li {
    list-style: none;
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color:inherit;
        text-decoration: none;
        font-size: 32px;
        font-weight: 600;
        background: linear-gradient(to right, #C368FF,#6AE6FF);
        background-size: 200% 200%;
        animation: rainbow 10s ease-in-out infinite;
        background-clip: text;
        transition: color .2s ease-in-out;

        &:hover,
        &.router-link-active {
            color:rgba(255,255,255,0);
        }
    }
}

main {
    background-color: black;
    color: white;
}

@keyframes rainbow { 
  0%{background-position:left}
  50%{background-position:right}
  100%{background-position:left}
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #6AE6FF; }
}

@keyframes typing {
  from { width: 0px }
  to { width: 490px }
}

@media only screen and (max-width: 1280px) {
    header {
        nav {
            .logo-container {
                h3 {
                    margin: 0.7em 1em !important;
                    font-size: 24px;
                    width: 320px;
                    animation: blink-caret .75s step-end infinite, typing 5s steps(40, end);
                }
            }
        }
    }
    ul {
        margin: 0.7em 0;
        li {
            margin: 0 0.7em;
            a {
                font-size: 24px;
            }
        }
    }
    @keyframes typing {
        from { width: 0px }
        to { width: 320px }
    }
}

@media only screen and (max-width: 880px) {
    header {
        justify-content: flex-start;
        transition: 500ms height ease-in-out, 500ms background ease-in-out;
        nav {
            flex-direction: column;
            align-items: start;
            .logo-container {
                display: flex;
                justify-content: space-between;
                width: 100%;;

                .hamburger-menu {
                    all: unset;
                    margin: 0 1em;
                    display: block;
                    cursor: pointer;
                    position: relative;
                    width: 50px;
                    i {
                        display: block;
                        width: 3px;
                        height: 26px;
                        background-color: white;
                        border-radius: 2px;
                        position: absolute;
                        transform: rotate(90deg);
                        transition: top 500ms ease-in-out, transform 500ms ease-in-out;
                        left: 10px;

                        &:first-child {
                            top: 15px;
                        }
                        &:last-child {
                            top: 25px;
                        }                                  
                    }
                }
            }

            ul {
                flex-direction: column;
                align-items: start;
                margin-left: 1em;
                height: 0vh;
                transition: 500ms height ease-in-out;
                overflow: hidden;
                margin: 0em 0em;
                li {
                    margin: 0.7em;

                    a {
                        font-size: 32px;
                    }
                }
            }
        }
        &.active {
            height: 100vh;
            background: rgba(0, 0, 0, 1);
            transition: 500ms height ease-in-out, 500ms background ease-in-out;

            .hamburger-menu {
                    i {
                        top: 20px !important;
                        &:first-child {
                            transform: rotate(45deg);
                        }
                        &:last-child {
                            transform: rotate(-45deg);
                        }
                    }
                }

            ul {
                display: flex;
                height: 100vh;
            }
        }
    }
}
@media only screen and (max-width: 450px) {
    header {
        nav {
            .logo-container {
                h3 {
                    font-size: 18px !important;
                    width: 240px;
                    margin-right: 0 !important;
                }
            }
            .hamburger-menu {
                margin-top: -9px !important;
            }
            ul {
                li {
                    a {
                        font-size: 24px !important;
                    }
                }
            }
            .hamburger-menu {
                margin-right: 0px !important;
                margin-top: -5px !important;
                i {
                    height: 20px !important;
                }
            }
        }
    }
    @keyframes typing {
        from { width: 0px }
        to { width: 240px }
    }
}
</style>