import { mount } from '@vue/test-utils';
import Controls from '@/components/MediaPlayer/Controls';

describe('Controls.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Controls);
    expect(wrapper.contains('button')).toBe(true);
  });
});
