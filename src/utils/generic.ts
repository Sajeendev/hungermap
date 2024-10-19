export const formatPercentage = (input: number): string => {
  return (input * 100).toFixed(2) + '%';
};

export const formatInMillions = (input: number): string => {
  if (input >= 1_000_000) {
    return (input / 1_000_000).toFixed(1) + 'M';
  }

  return input.toString();
};
