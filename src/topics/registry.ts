import type { Topic } from "../shared/topic-page";
import { templateTopic } from "./_template/page";
import { chineseCarsInEuropeTopic } from "./chinese-cars-in-europe/page";

export const topics: Record<string, Topic> = {
  [templateTopic.slug]: templateTopic,
  [chineseCarsInEuropeTopic.slug]: chineseCarsInEuropeTopic,
};

export const defaultTopicSlug = chineseCarsInEuropeTopic.slug;
