<template>
    <div
        class="inline-flex items-center mb-12 select-none cursor-pointer"
        @click="goBack"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="cursor-pointer fill-zinc-500"
            width="50"
            role="button"
        >
            <path
                d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
            />
        </svg>
        <span class="uppercase text-nase text-zinc-500">Go Back</span>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goBack = () => {
        router.go(-1);
    };
</script>
