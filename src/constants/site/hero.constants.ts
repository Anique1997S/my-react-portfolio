import { ComponentProps } from 'react';
import heroImage1 from '../../assets/images/hero.jpg';
import heroImage2 from '../../assets/images/hero_2.jpeg';
import { download } from '../icons.svg';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type HeroLayout = ComponentProps<typeof layouts.Hero>;
type NoneWrapper = ComponentProps<typeof wrappers.None>;

type HeroLayoutWithNoneWrapper = HeroLayout & NoneWrapper;

export const CallToAction = {
  text: 'View CV',
  link:
    'https://drive.google.com/file/d/1C2OWU0M0XiueW4uBx3VwCn5nr5dmZvq0/view?usp=sharing',
  icon: download,
};

const heroConfig: HeroLayoutWithNoneWrapper = {
  id: 'home',
  layoutName: 'Hero',

  wrap: 'None',

  cta: CallToAction,
  slides: [
    {
      image: heroImage1,
      title: ['Hi!', "I'm Anique"],
      subtitle: '',
    },
    {
      image: heroImage2,
      title: ['I am an', 'Aerospace Engineer'],
      subtitle: '',
    },
  ],
};

export default heroConfig;
