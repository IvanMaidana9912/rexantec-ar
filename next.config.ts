/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Borra o comenta cualquier "domains: [...]" que estuvieras usando
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',       // puede omitirse si no usas un puerto específico
        pathname: '/**' // todas las rutas bajo ese host
      },
      // si luego necesitas otros hosts, agrégalos aquí:
      // {
      //   protocol: 'https',
      //   hostname: 'otro.dominio.com',
      //   pathname: '/imagenes/**'
      // }
    ]
  }
};

module.exports = nextConfig;