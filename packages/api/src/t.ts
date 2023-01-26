/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
const fastify = require("fastify")();

// Step 1: Register the fastify-jwt plugin
fastify.register(require("fastify-jwt"), {
  secret: "mysecret",
});

// @ts-ignore
// Step 2: Generate a JWT token when a user logs in
fastify.post("/login", (_req, reply) => {
  // check user credentials
  // @ts-ignore
  if (valid) {
    // @ts-ignore
    const payload = { sub: user.id };
    reply.send({ token: fastify.jwt.sign(payload) });
  } else {
    reply.status(401).send({ message: "Invalid username or password" });
  }
});

// Step 3: Protect routes that require authentication
// @ts-ignore
fastify.get("/secure", { preValidation: fastify.auth([fastify.verifyJWT]) }, (_req, reply) => {
  reply.send({ message: "Welcome to the secure area" });
});

// Step 5: Handle errors if token is expired or invalid
// @ts-ignore
fastify.setErrorHandler(function (error, _request, reply) {
  if (error.statusCode === 401) {
    reply.send({ error: "Invalid token" });
  }
});

// @ts-ignore
fastify.listen(3000, err => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
