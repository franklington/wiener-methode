import { renderTopicPage } from "./shared/topic-page";
import { templateTopic } from "./topics/_template/page";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Missing #app mount element in index.html");
}

// REPLACE: once more than one topic exists, swap this for a router/index
// that picks a topic by slug instead of always mounting the template.
app.innerHTML = renderTopicPage(templateTopic);
