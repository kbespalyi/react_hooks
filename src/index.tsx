import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'App';

export { useBooleanState as useBoolean } from './useBooleanState';
export type { UseBoolean } from './useBooleanState';

export { useMapState as useMap } from './useMapState';
export type { UseMap } from './useMapState';
export type { MapOrEntries } from './array/useMap';

export { useStateful } from './useStateful';
export type { UseStateful } from './useStateful';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
