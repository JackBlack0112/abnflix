<template>
    <div>
        <GoBack />
        <div
            v-if="!isLoading && show"
            class="flex items-stretch flex-wrap md:flex-nowrap"
        >
            <div
                class="relative max-w-[450px] w-full rounded-lg"
                :class="{ 'bg-gray-600': !show.image?.original }"
            >
                <img
                    v-if="show.image?.original"
                    :src="show.image?.original"
                    class="rounded-lg"
                />
                <p
                    v-else
                    class="flex items-center justify-center text-2xl font-bold text-white bg-gray-600 h-[600px] rounded-lg"
                >
                    No image
                </p>
            </div>
            <div
                class="flex flex-col justify-between mx-0 md:mx-4 mt-6 md:mt-0"
            >
                <div>
                    <span class="font-bold text-4xl">
                        {{ show.name }}
                    </span>
                    <Rating
                        v-if="show.rating?.average"
                        :value="show.rating.average"
                    />
                    <p
                        v-html="show.summary"
                        class="mt-4 max-w-[45rem] overflow-auto"
                    />
                </div>
                <div
                    v-if="show.genres && show.genres?.length > 0"
                    class="mt-2 text-gray-400"
                >
                    <span>Genres: {{ show.genres.join(', ') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    import { ref, watch } from 'vue';
    import tvmazeService, { Show } from '@/services/tvmaze.service';

    import Rating from '@/components/Rating.vue';
    import GoBack from '@/components/GoBack.vue';

    const show = ref<Show | null>(null);
    const route = useRoute();
    const isLoading = ref<boolean>(true);

    const refresh = async (newShow?: unknown) => {
        if (!newShow) {
            return;
        }

        isLoading.value = true;
        const showId: number = parseInt(newShow as string);

        show.value = await tvmazeService.getShow(showId);
        isLoading.value = false;
    };

    watch(() => route?.params?.id, refresh, { immediate: true });
</script>
