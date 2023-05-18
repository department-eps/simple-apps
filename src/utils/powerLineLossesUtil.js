export function forLoopPowerLossesOptions(radioValue) {
    let start, end, step;
    if (radioValue === 'P') {
      start = -100;
      end = 100;
      step = 2;
    } else if (radioValue === 'Q') {
      start = -100;
      end = 100;
      step = 2;
    } else if (radioValue === 'Lw') {
      start = 10;
      end = 1000;
      step = 10;
    }
    return {start, end, step};
};