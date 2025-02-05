<template>
    <router-link
        :to="{ name: 'show', params: { id: props.show.id } }"
        class="cursor-pointer select-none"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
        <div
            class="hover:scale-105 transition duration-100 rounded-lg shadow-md"
        >
            <div class="relative w-[210px] h-[295px]">
                <img
                    v-if="props.show.image"
                    :src="props.show.image?.medium"
                    class="rounded-lg"
                />
                <p
                    v-else
                    class="flex items-center justify-center text-2xl font-bold text-white bg-gray-600 h-full rounded-lg"
                >
                    No image
                </p>
            </div>
            <div
                v-show="hover"
                class="absolute flex flex-col justify-between top-0 bottom-0 left-0 right-0 opacity-80 bg-black rounded-lg"
            >
                <span class="ml-4 mt-4 font-bold">
                    {{ props.show.name }}
                </span>
                <Rating
                    v-if="props.show.rating?.average"
                    :value="props.show.rating.average"
                    class="m-2"
                />
            </div>
        </div>
    </router-link>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { Show } from '@/services/tvmaze.service';

    import Rating from '@/components/Rating.vue';

    const props = defineProps<{
        show: Show;
    }>();

    const hover = ref<boolean>(false);

    defineExpose({ hover });
</script>
