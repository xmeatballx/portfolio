// import { gsap } from 'gsap';

// wait for everything to be ready
window.addEventListener('load', () => {
  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
    container: 'canvas',
    watchScroll: false,
  });
  // get our plane element
  const planeElement = document.getElementsByClassName('plane')[0];

  // set our initial parameters (basic uniforms)
  const params = {
    vertexShader: vertexShader, // our vertex shader ID
    fragmentShader: fragmentShader, // our fragment shader ID
    uniforms: {
      time: {
        name: 'uTime', // uniform name that will be passed to our shaders
        type: '1f', // this means our uniform is a float
        value: 0,
      },
      resolution: {
        name: 'resolution',
        type: '2f',
        value: new Vec2(window.innerWidth, window.innerHeight),
      },
    },
  };
  // create our plane using our curtains object, the HTML element and the parameters
  const plane = new Plane(curtains, planeElement, params);
  plane.onRender(() => {
    // use the onRender method of our plane fired at each requestAnimationFrame call
    plane.uniforms.time.value += 0.001; // update our time uniform value
  });
});

const container = document.querySelector('.container');
const nav = document.querySelector('nav');
const links = [...nav.children];
const sections = document.querySelectorAll('section#work, section#skills, section#contact');
const articles = document.querySelectorAll('article');
const options = {
  root: container,
  rootMargin: '0px',
  threshold: 0.1,
};
const sectionObserver = new IntersectionObserver(handleSectionIntersections, options);
const articleObserver = new IntersectionObserver(handleArticleIntersections, options);

links.forEach((link) => {
  link.addEventListener('click', handleClick);
});

[...sections].map((section) => {
  sectionObserver.observe(section);
});

[...articles].map((article) => {
  articleObserver.observe(article);
});

function handleClick(e) {
  links.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
}

function handleSectionIntersections(e) {
  const event = getEventTarget(e);
  if (event) {
    links.forEach((link) => link.classList.remove('active'));
    const index = [...sections].findIndex((entry) => entry == getEventTarget(e));
    links[index].classList.add('active');
  }
}

function handleArticleIntersections(e) {
  const event = getEventTarget(e);
  if (event) event.style.opacity = 1;
}

function getEventTarget(e) {
  if (e[0].intersectionRatio < 0.1 || (e[1] && e[1].intersectionRatio < 0.1)) return;
  return e[0].intersectionRatio > 0.1 ? e[0].target : e[1].target;
}
