import type { Topic } from "../../shared/topic-page";
import { sources } from "./sources";
import { renderOldGuardTimeline } from "./units/old-guard-timeline";
import { renderOldGuardVolumes } from "./units/old-guard-volumes";
import { renderHeadlineShare } from "./units/headline-share";
import { renderBrandRoster } from "./units/brand-roster";
import { renderEntryTimeline } from "./units/entry-timeline";
import { renderCountryContrast } from "./units/country-contrast";
import { renderBydHistory } from "./units/byd-history";
import { renderOvercapacity } from "./units/overcapacity";
import { renderEuTariffs } from "./units/eu-tariffs";
import { renderSupplierFallout } from "./units/supplier-fallout";
import { renderLocalProduction } from "./units/local-production";
import { renderTechLicensing } from "./units/tech-licensing";

export const chineseCarsInEuropeTopic: Topic = {
  slug: "chinese-cars-in-europe",
  title: "How did Chinese carmakers go from nowhere to 1 in every 10 cars sold in Europe?",
  subtitle:
    "Volkswagen, Ford, and Mercedes-Benz took most of a century to define Europe's car market. Chinese brands have taken about five years to grab a tenth of it.",
  sections: [
    // Act 1 - the old guard built this market over a century
    { render: renderOldGuardTimeline },
    { render: renderOldGuardVolumes },
    // Act 2 - the shift, in numbers
    { render: renderHeadlineShare },
    { render: renderBrandRoster },
    { render: renderEntryTimeline },
    { render: renderCountryContrast },
    // Act 3 - why now (mirrors act 1's causal structure)
    { render: renderBydHistory },
    { render: renderOvercapacity },
    // Act 4 - Europe's response, and the twist ending
    { render: renderEuTariffs },
    { render: renderSupplierFallout },
    { render: renderLocalProduction },
    { render: renderTechLicensing },
  ],
  sources,
};
