<template>
    <div class="wrapper">
        <Header />

        <div class="content overflow-y-auto bg-dark-primary">
            <router-view v-slot="{ Component }">
                <Transition name="slide-fade">
                    <component :is="Component" />
                </Transition>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Header from '@/components/Header.vue';
</script>

<style scoped>
    .wrapper {
        display: grid;
        gap: 0.2rem;
        height: 100vh;
        width: 100vw;
        grid-template-columns:
            [body] 100vw
            [end];
        grid-template-rows:
            [header] 4rem
            [body] auto
            [end];
        transition: 150ms;
        overflow-x: hidden;
    }

    .content {
        grid-column-start: body;
        grid-column-end: end;
        grid-row-start: body;
        grid-row-end: end;
        padding: 2rem;
    }

    .slide-fade-enter-active {
        transition: all 0.8s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>
