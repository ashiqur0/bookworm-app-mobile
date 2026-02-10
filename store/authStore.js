import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creating Global Variable using zustand
export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (username, email, password) => {
        set({ isLoading: true });

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            // storing user and token in AsyncStorage for persistence
            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            await AsyncStorage.setItem('token', data.token);

            // update global state with user and token
            set({ user: data.user, token: data.token, isLoading: false });

            return { success: true, data: data.user };
        } catch (error) {
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    },
}));