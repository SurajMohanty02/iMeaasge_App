import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatName: null,
    chatId: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});

export const { setChat } = chatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
