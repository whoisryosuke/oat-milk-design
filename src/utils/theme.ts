// We accept multiple options for utility props (like paddingLeft and paddingHorizontal)
// This gives priority to whichever comes first in array (e.g. `[pl,px,p]` will do `pl` first)
export const generateUtilityProps = (
  keys: (string | number | undefined)[],
  themeProp: Record<string | number, string | number>,
  fallback: string | number
) => {
  const actualKey = keys.find((key) => key && key !== "");

  return actualKey
    ? actualKey in themeProp
      ? themeProp[actualKey]
      : actualKey
    : fallback;
};
export const up = generateUtilityProps;
