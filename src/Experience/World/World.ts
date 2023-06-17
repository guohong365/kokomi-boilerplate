import * as kokomi from "kokomi.js";

import type Experience from "../Experience";

import TestObject from "./TestObject";

export default class World extends kokomi.Component {
  declare base: Experience;
  constructor(base: Experience) {
    super(base);

    this.base.assetManager.on("ready", () => {
      const envMap = kokomi.getEnvmapFromHDRTexture(
        this.base.renderer,
        this.base.assetManager.items["envmap"]
      );

      this.base.scene.background = envMap;
      this.base.scene.backgroundBlurriness = 0.5;
      this.base.scene.backgroundIntensity = 0.1;

      const testObject = new TestObject(this.base);
      testObject.addExisting();
    });
  }
}
