const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repository = process.env.GITHUB_REPOSITORY || ""
const repositoryName = repository.split("/")[1] || ""
const basePath = isGithubActions && repositoryName ? `/${repositoryName}` : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
