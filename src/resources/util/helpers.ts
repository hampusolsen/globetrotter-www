export type Procedure = (...args: unknown[]) => void;

export type Options = {
  isImmediate: boolean;
};

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  }
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function debouncedFunction(
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const context = this;

    function doLater() {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    }

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
}

export function toFlatArray<T>(acc: T[], cur: T[]): T[] {
  return acc.concat(cur);
}
