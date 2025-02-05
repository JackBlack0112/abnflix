<template>
    <header class="header bg-dark-primary select-none">
        <!-- Logo -->
        <div class="section-1 flex items-center">
            <a
                href="/"
                class="inline-block ml-8"
            >
                <img
                    src="../assets/logo.png"
                    width="25px"
                />
            </a>
        </div>

        <!-- Search -->
        <div class="section-2 flex items-center justify-end mr-8">
            <input
                type="search"
                class="bg-dark-tertiary border-dark-primary px-4 py-2 rounded"
                placeholder="Search"
                @keypress.enter="onSearch"
            />
        </div>
    </header>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const onSearch = (event: KeyboardEvent) => {
        const search = (event.target as HTMLInputElement).value;

        if (search) {
            router.push({ name: 'search', params: { query: search } });
        }
    };
</script>

<style scoped>
    .header {
        grid-column-start: body;
        grid-column-end: end;
        grid-row-start: header;
        grid-row-end: header;

        display: grid;

        grid-template-columns: [begin] 4rem [logo] auto [end];
    }

    .section-1 {
        grid-column-start: begin;
        grid-column-end: logo;
    }

    .section-2 {
        grid-column-start: logo;
        grid-column-end: end;
    }
</style>
