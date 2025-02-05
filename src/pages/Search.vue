<template>
    <div>
        <GoBack />
        <div v-if="!isLoading">
            <h2 class="text-2xl font-bold mb-4">
                <template v-if="shows.length > 1">
                    Search results for "{{ search }}"
                </template>
                <template v-else> No results for "{{ search }}" </template>
            </h2>

            <div class="flex flex-wrap justify-start gap-4">
                <ShowThumbnail
                    v-for="show in shows"
                    :key="show.id"
                    :show="show"
                />
            </div>
            <p
                v-if="shows.length > 1"
                class="mt-4"
            >
                {{ shows.length }} results
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    import { ref, watch } from 'vue';
    import tvmazeApi, { Show } from '@/services/tvmaze.service';

    import GoBack from '@/components/GoBack.vue';
    import ShowThumbnail from '@/components/ShowThumbnail.vue';

    const shows = ref<Show[]>([]);
    const route = useRoute();
    const search = ref<string>('');
    const isLoading = ref<boolean>(true);

    const refresh = async (newSearch?: unknown) => {
        if (!newSearch) {
            return;
        }

        isLoading.value = true;
        search.value = newSearch as string;
        shows.value = await tvmazeApi.searchShows(search.value);
        isLoading.value = false;
    };

    watch(() => route?.params?.query, refresh, { immediate: true });
</script>
