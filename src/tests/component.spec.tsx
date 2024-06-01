import { useState } from 'react';

import { act, render, renderHook, screen } from '../utils/tests/custom-render';

const Component = () => {
  return (
    <>
      <h2>Component</h2>
    </>
  );
};

function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return { counter, increment, decrement };
}

describe('component', () => {
  it('should be true', () => {
    render(<Component />);

    const h2 = screen.getByRole('heading', { name: 'Component' });

    expect(h2).toBeInTheDocument();
  });

  it('should be true', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(0);
  });
});
