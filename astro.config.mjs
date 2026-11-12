// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shakagency.es',

  redirects: {
    '/portfolio-shaka-agency/': '/portfolio/',

    '/nuestros-servicios/diseno-web/':
      '/nuestros-servicios/#diseno-web',

    '/nuestros-servicios/diseno-grafico/':
      '/nuestros-servicios/#branding',

    '/nuestros-servicios/merchandising/':
      '/nuestros-servicios/#branding',

    '/nuestros-servicios/diseno-carteleria/':
      '/nuestros-servicios/#branding',

    '/nuestros-servicios/redes-sociales/':
      '/nuestros-servicios/#redes',
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
