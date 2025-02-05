<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            <svg
                v-for="index in 5"
                :key="index"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="cursor-pointer fill-yellow-100"
                width="18"
            >
                <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
            </svg>
            <span class="inline-block text-white ml-2">
                {{ props.value }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = withDefaults(
        defineProps<{
            value?: number;
        }>(),
        {
            value: 0,
        },
    );
</script>
