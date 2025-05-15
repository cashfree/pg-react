import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  isCardNumberComplete: boolean;
  isCardHolderNameComplete: boolean;
  isCardExpiryComplete: boolean;
  isCardCvvComplete: boolean;
  isComplete: boolean;
  save: string | null;
  cardNumber: string | null;
  theme: "light" | "dark" | string; // update this based on possible theme values
}

const initialState: CardState = {
  isCardNumberComplete: false,
  isCardHolderNameComplete: false,
  isCardExpiryComplete: false,
  isCardCvvComplete: false,
  isComplete: false,
  save: null,
  cardNumber: null,
  theme: "light",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    cardNumberComplete: (state, action: PayloadAction<boolean>) => {
      state.isCardNumberComplete = action.payload;
    },
    cardHolderNameComplete: (state, action: PayloadAction<boolean>) => {
      state.isCardHolderNameComplete = action.payload;
    },
    cardExpiryComplete: (state, action: PayloadAction<boolean>) => {
      state.isCardExpiryComplete = action.payload;
    },
    cardCvvComplete: (state, action: PayloadAction<boolean>) => {
      state.isCardCvvComplete = action.payload;
    },
    isComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    cardNumber: (state, action: PayloadAction<string | null>) => {
      state.cardNumber = action.payload;
    },
    save: (state, action: PayloadAction<string | null>) => {
      state.save = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

// Export actions
export const {
  cardNumberComplete,
  cardHolderNameComplete,
  cardExpiryComplete,
  cardCvvComplete,
  isComplete,
  save,
  cardNumber,
  setTheme,
} = cardSlice.actions;

export default cardSlice.reducer;