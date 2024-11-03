// 使用本地包
import DynamicOperation from '../package/index';
// 使用npm包
// import DynamicOperation from 'dynamic-node-vue';
import ImageCard from '../component/ImageCard/ImageCard.vue';
import TitleCard from '../component/titleCard/TitleCard.vue';

export const cardInit = () => {
    DynamicOperation.registeCard('ImageCard', ImageCard);
    DynamicOperation.registeCard('TitleCard', TitleCard);
}