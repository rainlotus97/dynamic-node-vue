import DynamicOperation from '../package/index';
import ImageCard from '../component/ImageCard/ImageCard.vue';
import TitleCard from '../component/titleCard/TitleCard.vue';

export const cardInit = () => {
    DynamicOperation.registeCard('ImageCard', ImageCard);
    DynamicOperation.registeCard('TitleCard', TitleCard);
}