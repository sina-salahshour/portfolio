import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: unknown) =>
      // @ts-expect-error nextjs webpack config has no types, though i've copied this script from svgr docs
      rule.test?.test?.(".svg"),
    );
    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: { not: /url/ },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            ref: true,
            dimensions: false,
          },
        },
      ],
    });
    return config;
  },
};

export default withVanillaExtract(nextConfig);
