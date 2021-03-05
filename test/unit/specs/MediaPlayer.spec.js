import { mount } from '@vue/test-utils';
import MediaPlayer from '@/components/MediaPlayer/MediaPlayer';

describe('MediaPlayer.vue', () => {
  it('should render correct contents', () => {
    setTimeout(() => {
      const wrapper = mount(MediaPlayer);
      expect(wrapper.contains('div')).toBe(true);
    }, 1000);
  });
});
