export function calculateShipStop(distanceInMglt, mglt, consumables) {
  const units = {
    year: 24 * 30 * 12,
    month: 24 * 30,
    week: 24 * 7,
    day: 24,
  };

  const consumablesSplitted = consumables.split(" ");

  const unitWithoutLastLetter =
    +consumablesSplitted[0] > 1
      ? consumablesSplitted[1].slice(0, -1)
      : consumablesSplitted[1];

  return Math.floor(
    +distanceInMglt /
      +mglt /
      +(consumables.match(/\d+/)[0] * +units[unitWithoutLastLetter])
  );
}
