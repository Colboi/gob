import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/gob' : '',
  assetPrefix: isProd ? '/gob/' : '',
};

const mdxEnhancer = withMDX({
  extension: /\.mdx?$/,
});

export default mdxEnhancer({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});