// wait for everything to be ready
window.addEventListener("load", () => {
  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
    container: "canvas",
  });
  // get our plane element
  const planeElement = document.getElementsByClassName("plane")[0];
  const planeElement2 = document.getElementsByClassName("plane2")[0];

  // set our initial parameters (basic uniforms)
  const params = {
    vertexShaderID: "plane-vs", // our vertex shader ID
    fragmentShaderID: "plane-fs", // our fragment shader ID
    uniforms: {
      time: {
        name: "uTime", // uniform name that will be passed to our shaders
        type: "1f", // this means our uniform is a float
        value: 0,
      },
      resolution: {
        name: "resolution",
        type: "2f",
        value: new Vec2(window.innerWidth, window.innerHeight),
      },
    },
  };

  const params2 = {
    vertexShaderID: "plane2-vs", // our vertex shader ID
    fragmentShaderID: "plane2-fs", // our fragment shader ID
    uniforms: {
      time: {
        name: "uTime", // uniform name that will be passed to our shaders
        type: "1f", // this means our uniform is a float
        value: 0,
      },
      resolution: {
        name: "resolution",
        type: "2f",
        value: new Vec2(window.innerWidth, window.innerHeight),
      },
    },
  };
  // create our plane using our curtains object, the HTML element and the parameters
  const plane = new Plane(curtains, planeElement, params);
  // const plane2 = new Plane(curtains, planeElement2, params2);

  plane.onRender(() => {
    // use the onRender method of our plane fired at each requestAnimationFrame call
    plane.uniforms.time.value += 0.001; // update our time uniform value
  });

  // plane2.onRender(() => {
  //   // use the onRender method of our plane fired at each requestAnimationFrame call
  //   plane.uniforms.time.value += 0.001; // update our time uniform value
  // });
});
