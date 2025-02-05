<template>
    <div>
        <div
            v-show="!isLoading"
            v-for="genre in Object.keys(genres)"
            class="mb-8"
            :key="genre"
        >
            <h2 class="text-2xl font-bold">{{ genre }}</h2>
            <div
                class="flex py-4 justify-start gap-4 overflow-x-auto overflow-y-clip scrollbar-1"
            >
                <ShowThumbnail
                    v-for="show in genres[genre]"
                    :key="show.id"
                    :show="show"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onBeforeMount, ref } from 'vue';
    import tvmazeApi, { ShowsByGenre } from '@/services/tvmaze.service';

    import ShowThumbnail from '@/components/ShowThumbnail.vue';

    const genres = ref<ShowsByGenre>({});
    const isLoading = ref<boolean>(true);

    onBeforeMount(async () => {
        genres.value = tvmazeApi.orderGenredShowsByRating(
            tvmazeApi.groupShowsByGenre(await tvmazeApi.fetchShows()),
        );
        isLoading.value = false;
    });
</script>
