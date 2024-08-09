import { useCallback } from 'react';

export const useHttp = () => {
    const request = useCallback(async (url, method = 'POST', body, headers = {
        'Content-Type': 'application/json'
    }) => {
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Could not fetch ${url}, status: ${response.status}, message: ${errorData.message}`);
            }

            const data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    }, []);

    return { request };
};
