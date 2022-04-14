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
const sectionOptions = {
  root: container,
  rootMargin: '0px',
  threshold: 0.1,
};
const articleOptions = {
  root: container,
  rootMargin: '0px',
  threshold: 0.25,
};
const sectionObserver = new IntersectionObserver(handleSectionIntersections, sectionOptions);
const articleObserver = new IntersectionObserver(handleArticleIntersections, articleOptions);

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
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => link.classList.remove('active'));
      const index = [...sections].findIndex((section) => section == entry.target);
      console.log(index);
      links[index].classList.add('active');
    }
  });
}

function handleArticleIntersections(e) {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateX(0px)';
    }
  });
}
