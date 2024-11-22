import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';

interface UserState {
  users: User[];
  sortField: keyof User | '';
  sortDirection: 'asc' | 'desc';
}

const initialState: UserState = {
  users: [],
  sortField: '',
  sortDirection: 'asc',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    sortUsers: (state, action: PayloadAction<keyof User>) => {
      const field = action.payload;
      if (state.sortField === field) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortField = field;
        state.sortDirection = 'asc';
      }

      state.users.sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return state.sortDirection === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        return 0;
      });
    },
  },
});

export const { setUsers, sortUsers } = userSlice.actions;
export default userSlice.reducer;