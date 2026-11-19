// Only /_v/* reaches this script (see run_worker_first in wrangler.jsonc);
// everything else is served straight from ./public.
// /_v/* goes to the Vigil analytics Worker over a service binding, so its
// cookie stays first-party on manyu.now.
export default {
  fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/_v/")) return env.VIGIL.fetch(request);
    return env.ASSETS.fetch(request);
  },
};
