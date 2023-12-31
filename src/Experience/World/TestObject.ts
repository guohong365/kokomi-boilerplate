import * as kokomi from "kokomi.js";
import * as THREE from "three";

import type Experience from "../Experience";

import testObjectVertexShader from "../Shaders/TestObject/vert.glsl";
import testObjectFragmentShader from "../Shaders/TestObject/frag.glsl";

export default class TestObject extends kokomi.Component {
  declare base: Experience;
  uj: kokomi.UniformInjector;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  constructor(base: Experience) {
    super(base);

    const geometry = new THREE.IcosahedronGeometry(2, 64);
    const uj = new kokomi.UniformInjector(this.base);
    this.uj = uj;
    const uniforms = {
      iChannel0: {
        value: this.base.assetManager.items["uv-map"],
      },
      uDistort: {
        value: 1,
      },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: testObjectVertexShader,
      fragmentShader: testObjectFragmentShader,
      uniforms: {
        ...uj.shadertoyUniforms,
        ...uniforms,
      },
    });
    this.material = material;
    const mesh = new THREE.Mesh(geometry, material);
    this.mesh = mesh;

    if (this.base.debug.active) {
      const folder = this.base.debug.ui?.addFolder("testObject");
      folder
        ?.add(uniforms.uDistort, "value")
        .min(0)
        .max(2)
        .step(0.01)
        .name("distort");
    }
  }
  addExisting(): void {
    this.container.add(this.mesh);
  }
  update(): void {
    this.uj.injectShadertoyUniforms(this.material.uniforms);
  }
}
