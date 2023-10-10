const { Images } = require('~/assets/img');
const { routes } = require('~/routes/routes');

const projects = [
  {
    title: 'Web Programming week 6 exercise 1',
    description: 'Survey with servlet',
    image: Images.week6_ex1,
    link: routes.week6_ex1,
  },
  {
    title: 'Web Programming week 6 exercise 2',
    description: 'Survey with servlet',
    image: Images.week6_ex2,
    link: routes.week6_ex2,
  },
  {
    title: 'Web Programming week 7 exercise 1 and 2',
    description: 'Get started with session and cookies',
    image: Images.week7_ex1_ex2,
    link: routes.week7_ex1_ex2,
  },
  {
    title: 'Web Programming week 7 exercise 3',
    description: 'Get started with session and cookies',
    image: Images.week7_ex3,
    link: routes.week7_ex3,
  },
];

export default projects;
