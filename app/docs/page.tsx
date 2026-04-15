'use client';

import { useEffect } from 'react';

export default function DocsPage() {
  useEffect(() => {
    // Carrega dynamicamente o Swagger UI bundle
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui-bundle.js';
    script.async = true;
    script.onload = () => {
      const SwaggerUIBundle = (window as any).SwaggerUIBundle;

      SwaggerUIBundle({
        url: '/api/openapi',
        dom_id: '#swagger-ui',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIBundle.SwaggerUIStandalonePreset,
        ],
        layout: 'BaseLayout',
        deepLinking: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui.css"
      />
      <div id="swagger-ui" style={{ padding: '20px' }} />
    </>
  );
}
