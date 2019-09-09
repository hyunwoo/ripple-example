import { Component, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
// @ts-ignore
import vs from '!!raw-loader!./shader_vs.vert';
// @ts-ignore
import fs from '!!raw-loader!./shader_fs.frag';
@Component({
  components: {
    //
  },
})
export default class Space extends Vue {
  private camera: any = null;
  private scene: any = null;
  private renderer: any = null;

  private stars: THREE.Mesh[] = [];
  private starsLen: number = 400;
  private width: number = -1;
  private height: number = -1;
  private material!: THREE.Material;

  private tick = 0;

  private init() {
    const container = document.getElementById('container') as HTMLElement;

    this.width = container.clientWidth;
    this.height = container.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000,
    );
    this.camera.position.z = 500;

    const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
    // https://solarsystem.nasa.gov/system/downloadable_items/1051_pia21983.jpg
    const texture2 = new THREE.TextureLoader().load('https://solarsystem.nasa.gov/system/downloadable_items/1051_pia21983.jpg');
    const texture3 = new THREE.TextureLoader().load('/sample.png');
    // console.log(texture, '!!');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;

    texture3.wrapS = THREE.RepeatWrapping;
    texture3.wrapT = THREE.RepeatWrapping;


    const geometry = new THREE.PlaneGeometry(500, 500);
    this.material = new THREE.RawShaderMaterial({
      uniforms : {
        tex1: {
          type: 't',
          value: texture,
        },
        tex2: {
          type: 't',
          value: texture2,
        },
        tex3: {
          type: 't',
          value: texture3,
        },
        time : {
          value : 0,
        },
      },
      vertexShader: vs ,
      fragmentShader:  fs,

    });
    const star = new THREE.Mesh(geometry, this.material);
    console.log(star);
    this.scene.add(star);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.renderer.setSize(this.width, this.height);

    if (container) {
      container.appendChild(this.renderer.domElement);
    }
  }
  private animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.tick ++;
    const time = performance.now();
    // var object = scene.children[0];
    // object.rotation.y = time * 0.0005;
    // console.log(this.material.uniforms.time);
    try {
      // @ts-ignore
      this.material.uniforms.time.value = this.tick * 0.001;
    } catch (e) {
      // console.error(e);
    }
    // for (const star of this.stars) {
    //   star.position.z += 5;
    //   if (star.position.z > 450) {
    //     star.position.x = (Math.random() - 0.5) * 1000;
    //     star.position.y = (Math.random() - 0.5) * 500;
    //     star.position.z = Math.random() * 500 - 500;
    //   }
    // }

    this.renderer.render(this.scene, this.camera);
  }

  private mounted() {
    this.init();
    this.animate();
  }

  private beforeDestroy() {
    this.scene.dispose();
    this.renderer.dispose();
  }
}
