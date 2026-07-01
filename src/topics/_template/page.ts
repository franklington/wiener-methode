import type { Topic } from "../../shared/topic-page";
import { sources } from "./sources";
import { renderHeadlinePictogram } from "./units/headline-pictogram";

// REPLACE: give the page a slug, a title stated as a plain-language
// question or claim, and add one Section per infographic, in the order
// the reader should encounter them top to bottom.
export const templateTopic: Topic = {
  slug: "_template",
  title: "REPLACE ME: the topic, stated in one clear sentence",
  subtitle: "REPLACE ME: one line framing the question this page answers",
  sections: [{ render: renderHeadlinePictogram }],
  sources,
};
