import { useMemo } from 'react';
import useMapArray, { UseMapActions, MapOrEntries } from './array/useMap';

import type { UseStateful } from 'useStateful';

export type UseMap<K, V> = UseStateful<Map<K, V>> & UseMapActions<K, V>;

export function useMapState<K, V>(initialState: MapOrEntries<K, V> = new Map()): UseMap<K, V> {
  const [map, actions] = useMapArray(initialState);
  return useMemo(
    () => ({
      value: map,
      ...actions,
    }),
    [actions, map],
  );
}

export default useMapState;
