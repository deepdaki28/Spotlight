import { TokenCache } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

const createTokenCache = (): TokenCache => {
    return {
        getToken: async (key: string) => {
            try {
                const item = await SecureStore.getItemAsync(key);
                if (item) {
                    console.log(`${key} was used `);
                }
            }
            finally {
            }
        }
    };
};
