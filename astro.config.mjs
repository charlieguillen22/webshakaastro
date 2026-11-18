// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shakagency.es',
  trailingSlash: 'always',

  redirects: {
    '/portfolio-shaka-agency/': '/portfolio/',

    '/nuestros-servicios/diseno-web/': '/nuestros-servicios/#diseno-web',

    '/nuestros-servicios/diseno-grafico/': '/nuestros-servicios/#branding',

    '/nuestros-servicios/merchandising/': '/nuestros-servicios/#branding',

    '/nuestros-servicios/diseno-carteleria/': '/nuestros-servicios/#branding',

    '/nuestros-servicios/redes-sociales/': '/nuestros-servicios/#redes',

    '/blog-marketing-digital/': '/blog/',

    '/wp-content/uploads/2021/01/CATALOGO-DE-SERVICIOS-1.pdf': '/nuestros-servicios/',

    '/portfolio/pet-reuse-logotipo/': '/portfolio/',

    '/portfolio/ecoclean-pagina-web/': '/portfolio/',

    '/portfolio/pet-reuse-pagina-web/': '/portfolio/',

    '/portfolio/ah-asociacion-de-hosteleros-pagina-web/': '/portfolio/',

    '/portfolio/javi-risoto-trainer-pagina-web/': '/portfolio/',

    '/portfolio/oh-my-crepe-malaga-pagina-web-restaurante/': '/portfolio/',
  },

  integrations: [
    icon(),

    sitemap({
      filter: (page) =>
        !page.includes('/politica-de-cookies') &&
        !page.includes('/politica-de-privacidad') &&
        !page.includes('/aviso-legal') &&
        !page.includes('/categoria/'),
    }),
  ],
});