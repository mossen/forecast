import * as React from "react";

const useDebounce = <T>(
  value: T,
  callback: () => void,
  delay: number = 550
): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  React.useEffect(() => {
    callback();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return debouncedValue;
};

export default useDebounce;
