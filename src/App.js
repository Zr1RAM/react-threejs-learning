// import React from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three";
// class App extends Component {
//     componentDidMount() {
//         var scene = new THREE.Scene();
//         var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//         var renderer = new THREE.WebGLRenderer();
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         this.mount.appendChild( renderer.domElement );
      
//         var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//         var material = new THREE.MeshStandardMaterial( { color: 0x7e31eb } );
//         var cube = new THREE.Mesh( geometry, material );
//         scene.add( cube );
//         const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
//         scene.add( light );
// camera.position.z = 2;
// var animate = function () {
//             requestAnimationFrame( animate );
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;
//             cube.rotation.z += 0.01;
//             renderer.render( scene, camera );
//         };
//         animate();
//     }
//     render() {
//         return (
//             <div ref={ref => (this.mount = ref)} />
//         )
//     }
// }
// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement);
// export default App;






// import React from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three";
// class App extends Component {
//     render() {
//         return (
//             <div />
//         )
//     }
// }
// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement);
// export default App;

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
