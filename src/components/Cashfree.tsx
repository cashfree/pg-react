import React, { useEffect, ReactNode } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../redux/store";
import { setTheme, isComplete as setIsComplete } from "../redux/cardSlice";
import { themes } from "../constants/theme";
import { CustomStyle } from "../types";

interface CashfreeProps {
  theme?: string;
  customStyle?: CustomStyle;
  children: ReactNode;
  onComplete?: (status: boolean) => void; //user passed
}

const InternalCardLayout: React.FC<CashfreeProps> = ({
  theme = 'light',
  customStyle = {},
  children,
  onComplete
}) => {
  const dispatch = useDispatch();
  const {
    isCardNumberComplete,
    isCardHolderNameComplete,
    isCardExpiryComplete,
    isCardCvvComplete,
  } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    dispatch(setTheme(theme));
  }, [theme]);


  useEffect(() => {
    const internallyComplete =
      isCardNumberComplete &&
      isCardHolderNameComplete &&
      isCardExpiryComplete &&
      isCardCvvComplete;

    dispatch(setIsComplete( internallyComplete));
    if (onComplete) {
      onComplete(internallyComplete);
    }
  }, [
    isCardNumberComplete,
    isCardHolderNameComplete,
    isCardExpiryComplete,
    isCardCvvComplete,
    onComplete,
    dispatch,
  ]);

  const background =
    customStyle?.cardlayoutBackground ||
    themes[theme]?.cardlayoutBackground ||
    "#f6f9fb";

  return (
    <div
      id="cashfree"
      data-testid="cashfree-container"
      style={{
        width: "400px",
        padding: "20px",
        background: background,
      }}
    >
      {children}
    </div>
  );
};

// Exported wrapper: Injects Provider internally
const Cashfree: React.FC<CashfreeProps> = (props) => (
  <Provider store={store}>
    <InternalCardLayout {...props} />
  </Provider>
);

export default Cashfree;