import { IMAGES_PATH } from "../constants/images-path";
const {
    sportsType: { futsal, cricket, basketball, tennis },
} = IMAGES_PATH;

export const sportsTypeData = [
    {
        img: futsal.image,
        title: futsal.alt,
    },
    {
        img: cricket.image,
        title: cricket.alt,
    },
    {
        img: basketball.image,
        title: basketball.alt,
    },
    {
        img: tennis.image,
        title: tennis.alt,
    },
];
