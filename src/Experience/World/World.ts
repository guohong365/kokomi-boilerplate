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
      const geometry = new THREE.IcosahedronGeometry(2, 64);
      const uj = new kokomi.UniformInjector(this.base);
      const uniforms = {
        uDistort: {
          value: 1,
        },
      };
      const material = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        uniforms: {
          ...uj.shadertoyUniforms,
          ...uniforms,
        },
      });
      this.base.update(() => {
        uj.injectShadertoyUniforms(material.uniforms);
      });
      const mesh = new THREE.Mesh(geometry, material);
      this.base.scene.add(mesh);
      if (this.base.debug.active) {
        const folder = this.base.debug.ui?.addFolder("test");
        folder
          ?.add(uniforms.uDistort, "value")
          .min(0)
          .max(2)
          .step(0.01)
          .name("distort");
      }
    });
  }
}
