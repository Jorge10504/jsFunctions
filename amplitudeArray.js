"use strict";

function calcTempAmplitude(tempsArray) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) max = temps[i];
    if (currTemp < min) min = temps[i];
  }

  return max - min;
}
