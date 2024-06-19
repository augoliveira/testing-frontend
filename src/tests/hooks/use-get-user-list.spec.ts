import { act, renderHook, waitFor } from '@testing-library/react';

import { useGetUserList } from '@/hooks/use-get-user-list';

import { HttpClient } from '@/infra';

// isLoading, data, error

describe('useGetUserList', () => {
  it.skip('should returns user list', async () => {
    // Given
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    };
    const httpClient: HttpClient = {
      request: () => {
        return Promise.resolve(user);
      }
    };
    const { result } = renderHook(() =>
      useGetUserList({
        httClient: httpClient
      })
    );

    // When
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Then
    expect(result.current.users).toMatchObject(user);
  });

  it('should returns user list', async () => {
    // Given
    const errorMessage = 'error';
    const httpClient: HttpClient = {
      request: () => {
        throw new Error(errorMessage);
      }
    };
    const { result } = renderHook(() =>
      useGetUserList({
        httClient: httpClient
      })
    );

    // When
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Then
    expect(result.current.users).toMatchObject({});
    expect(result.current.errorMessage).toBe(errorMessage);
  });
});
