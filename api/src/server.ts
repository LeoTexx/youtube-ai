import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  getAllPromptsRoute,
  uploadVideoRoute,
  createTranscriptionRoute,
  generateAiCompletionRoute,
} from "./routes";

const app = fastify();
const PORT = 3333;

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${PORT}`);
  });
