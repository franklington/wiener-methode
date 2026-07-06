import type { Topic } from "../../shared/topic-page";
import { sources } from "./sources";
import { renderLitteringProblem } from "./units/littering-problem";
import { renderSystemBasics } from "./units/system-basics";
import { renderYearOneResult } from "./units/year-one-result";
import { renderRampUp } from "./units/ramp-up";
import { renderRvmInfrastructure } from "./units/rvm-infrastructure";
import { renderReuseCollapse } from "./units/reuse-collapse";
import { renderRecyclabilityPayoff } from "./units/recyclability-payoff";
import { renderReductionCaveat } from "./units/reduction-caveat";

export const pfandsystemAustriaTopic: Topic = {
  slug: "pfandsystem-austria",
  title: "Austria brought back the bottle deposit - but not the reuse it replaced",
  subtitle:
    "In its first year, Austria's new 25-cent deposit beat its own recycling target, while the reusable-bottle culture it followed keeps shrinking.",
  sections: [
    // Act 1 - the problem the deposit was built to solve
    { render: renderLitteringProblem },
    { render: renderSystemBasics },
    // Act 2 - how the first year actually went
    { render: renderYearOneResult },
    { render: renderRampUp },
    { render: renderRvmInfrastructure },
    // Act 3 - the backstory this "new" system is really answering
    { render: renderReuseCollapse },
    { render: renderRecyclabilityPayoff },
    // Act 4 - the honest caveat
    { render: renderReductionCaveat },
  ],
  sources,
};
