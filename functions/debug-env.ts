export const onRequest: PagesFunction = async ({ env }) => {
  return new Response(JSON.stringify({
    hasUser: !!env.WEBDAV_USERNAME,
    hasPass: !!env.WEBDAV_PASSWORD,
    hasBucket: !!env.BUCKET,
    hasPublicRead: env.WEBDAV_PUBLIC_READ ?? null,
  }), { headers: { "content-type": "application/json" } });
};
