import type { Topic } from "../shared/topic-page";
import { templateTopic } from "./_template/page";
import { chineseCarsInEuropeTopic } from "./chinese-cars-in-europe/page";
import { pfandsystemAustriaTopic } from "./pfandsystem-austria/page";

export const topics: Record<string, Topic> = {
  [templateTopic.slug]: templateTopic,
  [chineseCarsInEuropeTopic.slug]: chineseCarsInEuropeTopic,
  [pfandsystemAustriaTopic.slug]: pfandsystemAustriaTopic,
};

export const defaultTopicSlug = chineseCarsInEuropeTopic.slug;
