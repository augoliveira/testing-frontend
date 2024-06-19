import { act, render, screen } from '@testing-library/react';

import { FormDataModal } from '@/components/modal/form-data-modal';

describe('Modal', () => {
  it('should open modal', () => {
    render(<FormDataModal />);

    act(() => {
      const button = screen.getByRole('button', { name: 'Abrir' });
      button.click();
    });

    expect(
      screen.getByRole('heading', { name: 'Dados pessoais' })
    ).toBeVisible();
  });
});
