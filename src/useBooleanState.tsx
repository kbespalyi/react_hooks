import { useMemo } from 'react';
import useBooleanArray, { UseBooleanActions } from './array/useBoolean';

import type { UseStateful } from 'useStateful';

export type UseBoolean = UseStateful<boolean> & UseBooleanActions;

export function useBooleanState(initial: boolean): UseBoolean {
  const [value, actions] = useBooleanArray(initial);
  return useMemo(
    () => ({
      value,
      ...actions,
    }),
    [actions, value],
  );
}

export default useBooleanState;
