// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    // ビルド時にSharpで画像を最適化し、静的なwebpを生成する。
    // (デフォルトの実行時Cloudflare Imagesは静的サイトでは動かないため)
    imageService: "compile",
  }),
  devToolbar: { enabled: false },
});
