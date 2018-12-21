import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'GumTube';
  res.locals.routes = routes;
  next();
};
