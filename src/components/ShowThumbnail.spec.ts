import router from '@../../router';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ShowThumbnail from './ShowThumbnail.vue';

const show = {
    id: 1,
    name: 'Test Show',
    image: { medium: 'test.jpg' },
    rating: { average: 8.5 },
};

describe('ShowThumbnail.vue', () => {
    it('renders show name and image', () => {
        const wrapper = mount(ShowThumbnail, {
            global: { plugins: [router] },
            props: {
                show: show,
            },
        });

        expect(wrapper.text()).toContain(show.name);
        expect(wrapper.find('img').exists()).toBe(true);
    });

    it('renders no image message if image is not available', () => {
        const showWithoutImage = { ...show, image: undefined };
        const wrapper = mount(ShowThumbnail, {
            global: { plugins: [router] },
            props: {
                show: showWithoutImage,
            },
        });

        expect(wrapper.text()).toContain('No image');
    });

    it('renders rating component if rating is available', () => {
        const wrapper = mount(ShowThumbnail, {
            global: { plugins: [router] },
            props: {
                show: show,
            },
        });

        expect(wrapper.findComponent({ name: 'Rating' }).exists()).toBe(true);
    });

    it('does not render rating component if rating is not available', () => {
        const showWithoutRating = { ...show, rating: undefined };
        const wrapper = mount(ShowThumbnail, {
            global: { plugins: [router] },
            props: {
                show: showWithoutRating,
            },
        });

        expect(wrapper.findComponent({ name: 'Rating' }).exists()).toBe(false);
    });

    it('emits mouseenter and mouseleave events', async () => {
        const wrapper = mount(ShowThumbnail, {
            global: { plugins: [router] },
            props: {
                show: show,
            },
        });

        await wrapper.trigger('mouseenter');
        expect(wrapper.vm.hover).toBe(true);

        await wrapper.trigger('mouseleave');
        expect(wrapper.vm.hover).toBe(false);
    });

    it('navigates to correct show when clicked', async () => {
        const wrapper = mount(ShowThumbnail, {
            props: {
                show: show,
            },
            global: { plugins: [router] },
        });

        const push = vi.spyOn(router, 'push');
        await wrapper.trigger('click');

        expect(push).toHaveBeenCalledWith({
            name: 'show',
            params: { id: show.id },
        });
    });
});
