import * as kokomi from "kokomi.js";

import type Experience from "../Experience";

export default class World extends kokomi.Component {
  declare base: Experience;
  constructor(base: Experience) {
    super(base);

    this.base.assetManager.on("ready", () => {
      const envMap = kokomi.getEnvmapFromHDRTexture(
        this.base.renderer,
        this.base.assetManager.items["env"]
      );

      this.base.scene.environment = envMap;
    });
  }
}
