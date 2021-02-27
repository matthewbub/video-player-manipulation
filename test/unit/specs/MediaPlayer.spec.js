import Vue from 'vue';
import MediaPlayer from '@/components/MediaPlayer/MediaPlayer';

describe('MediaPlayer.vue', () => {
  it('should render .webm extension', () => {
    const Constructor = Vue.extend(MediaPlayer);
    const vm = new Constructor().$mount();
    // console.log({
    //   "__logs__" : vm.$el.querySelector('.video-webm').src
    // })
    expect(vm.$el.querySelector('.video-webm').src)
      .toEqual('http://localhost/assets/big_buck_bunny.webm');
  });

  it('should render .mp4 extension', () => {
    const Constructor = Vue.extend(MediaPlayer);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.video-mp4').src)
      .toEqual('http://localhost/assets/big_buck_bunny.mp4');
  });
});
