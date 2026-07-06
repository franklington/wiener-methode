import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { rvmInfrastructure } from "../data";

const MACHINES_PER_ICON = 200;
const EMOJI = "🤖";

export function renderRvmInfrastructure(): string {
  const row = toPictogramRow(rvmInfrastructure.machineCount, MACHINES_PER_ICON, EMOJI);

  return `
    <section class="infographic" data-unit="rvm-infrastructure">
      <p class="pictogram" aria-label="${rvmInfrastructure.machineCount} reverse vending machines">${row}</p>
      <p class="caption">
        Each ${EMOJI} = ${MACHINES_PER_ICON} machines. More than
        ${rvmInfrastructure.machineCount.toLocaleString("en-US")} reverse vending machines now
        stand in Austrian shops - ${rvmInfrastructure.shareReturnedViaMachine}% of all deposit
        containers are returned through one, giving Austria the second-highest density of return
        machines in Europe.
        <sup><a href="#source-${rvmInfrastructure.sourceId}">[3]</a></sup>
      </p>
    </section>
  `;
}
