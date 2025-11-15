import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  try {
    return await next();
  } catch (error) {
    console.error("Error caught in middleware:", error);
    // Redirect to 404 page on any error
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/404"
      }
    });
  }
};

