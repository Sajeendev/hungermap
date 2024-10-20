export const formatInPercentage = (input: number | undefined): string => {
  if (!input) return '';

  return (input * 100).toFixed(1) + '%';
};

export const formatInMillions = (input: number): string => {
  if (isNaN(input) || input === null || input === undefined) return '';

  const absInput = Math.abs(input);

  if (absInput >= 1_000_000) {
    return (input / 1_000_000).toFixed(1) + 'M';
  }

  if (absInput >= 1_000) {
    return (input / 1_000).toFixed(1) + 'K';
  }

  return input.toString();
};
