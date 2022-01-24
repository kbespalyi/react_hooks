import React from 'react';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useStateful } from '../useStateful';
import { useBooleanState } from '../useBooleanState';
import { useMapState } from '../useMapState';

import App from '../App';

describe(`App`, () => {
  it(`show hello world`, () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Hello world');
  });
});

describe(`useStateful`, () => {
  it('should change value', () => {
    const { result } = renderHook(() => useStateful('initial'));
    expect(result.current.value).toBe('initial');

    act(() => result.current.setValue('changed'));

    expect(result.current.value).toBe('changed');
  });
});

describe(`useBoolean`, () => {
  describe(`Set value`, () => {
    it(`should set true`, () => {
      const { result } = renderHook(() => useBooleanState(false));
      const { setTrue } = result.current;

      expect(result.current.value).toBe(false);

      act(() => setTrue());

      expect(result.current.value).toBe(true);
    });

    it(`should set false`, () => {
      const { result } = renderHook(() => useBooleanState(true));
      const { setFalse } = result.current;

      expect(result.current.value).toBe(true);

      act(() => setFalse());

      expect(result.current.value).toBe(false);
    });

    it(`should toggle`, () => {
      const { result } = renderHook(() => useBooleanState(true));
      const { toggle } = result.current;

      expect(result.current.value).toBe(true);

      act(() => toggle());

      expect(result.current.value).toBe(false);

      act(() => toggle());
      expect(result.current.value).toBe(true);
    });
  });

  describe(`hooks optimizations`, () => {
    it(`should keep actions reference equality after value change`, () => {
      // given
      const { result } = renderHook(() => useBooleanState(true));
      const { setFalse, setTrue, toggle } = result.current;

      expect(result.current.setFalse).toBe(setFalse);
      expect(result.current.setTrue).toBe(setTrue);
      expect(result.current.toggle).toBe(toggle);

      expect(result.current.value).toBe(true);

      // when
      act(() => setFalse());
      // then
      expect(result.current.value).toBe(false);

      // when
      act(() => setTrue());
      // then
      expect(result.current.value).toBe(true);

      // when
      act(() => toggle());
      // then
      expect(result.current.value).toBe(false);
    });
  });
});

describe(`useMap`, () => {
  describe(`Set value`, () => {
    it(`should update old value`, () => {
      // given
      const { result } = renderHook(() => useMapState<number, string>([[1, 'default']]));
      const { set } = result.current;
      expect(result.current.value.get(1)).toBe('default');
      // when
      act(() => set(1, 'changed'));
      // then
      expect(result.current.value.get(1)).toBe('changed');
    });

    it(`should add new value`, () => {
      // given
      const { result } = renderHook(() => useMapState<number, string>());
      const { set } = result.current;
      expect(result.current.value.get(1)).toBeUndefined();
      // when
      act(() => set(1, 'added'));
      // then
      expect(result.current.value.get(1)).toBe('added');
    });
  });

  describe(`delete`, () => {
    it(`should delete existing value`, () => {
      // given
      const { result } = renderHook(() => useMapState<number, string>([[1, 'existing']]));
      const { delete: aDelete } = result.current;
      expect(result.current.value.get(1)).toBe('existing');
      // when
      act(() => aDelete(1));
      // then
      expect(result.current.value.get(1)).toBeUndefined();
    });
  });

  describe('initialize', () => {
    it.each`
      message    | input
      ${'map'}   | ${new Map([[1, 'initialized']])}
      ${'tuple'} | ${[[1, 'initialized']]}
    `('initializes with $message', ({ input }) => {
      // given
      const { result } = renderHook(() => useMapState<number, string>());
      const { initialize } = result.current;
      expect(result.current.value.get(1)).toBeUndefined();
      // when
      act(() => initialize(input));
      // then
      expect(result.current.value.get(1)).toBe('initialized');
    });
  });

  describe('clear', () => {
    it('clears the map state and gets values', () => {
      // given
      const { result } = renderHook(() => useMapState<number, string>([[1, 'initialized']]));
      const { clear } = result.current;
      expect(result.current.value.get(1)).toBe('initialized');
      // when
      act(() => clear());
      // then
      expect(result.current.value.get(1)).toBeUndefined();
    });
  });

  describe(`hooks optimizations`, () => {
    it('should change value reference equality after change', () => {
      // given
      const { result } = renderHook(() => useMapState<number, number>());
      const { value, set } = result.current;
      expect(result.current.value).toBe(value);
      // when
      act(() => set(1, 1));
      // then
      expect(value).not.toBe(result.current.value);
      expect(value.get(1)).toBeUndefined();
      expect(result.current.value.get(1)).toBe(1);
    });

    it('should keep actions reference equality after value change', () => {
      // given
      const { result } = renderHook(() => useMapState<number, number>());
      const { set } = result.current;
      expect(result.current.set).toBe(set);
      // when
      act(() => set(1, 1));
      // then
      expect(set).toBe(result.current.set);
    });
  });
});
