import * as kokomi from "kokomi.js";
import * as THREE from "three";

import type Experience from "../Experience";

import testVertexShader from "../Shaders/test/vert.glsl";
import testFragmentShader from "../Shaders/test/frag.glsl";

export default class World extends kokomi.Component {
  declare base: Experience;
  constructor(base: Experience) {
    super(base);

    this.base.assetManager.on("ready", () => {
      const envMap = kokomi.getEnvmapFromHDRTexture(
        this.base.renderer,
        this.base.assetManager.items["envmap"]
      );

      this.base.scene.environment = envMap;

      // placeholder
      const geometry = new THREE.PlaneGeometry(1, 1, 64, 64);
      const uj = new kokomi.UniformInjector(this.base);
      const material = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        uniforms: {
          ...uj.shadertoyUniforms,
        },
      });
      this.base.update(() => {
        uj.injectShadertoyUniforms(material.uniforms);
      });
      const mesh = new THREE.Mesh(geometry, material);
      this.base.scene.add(mesh);
    });
  }
}
