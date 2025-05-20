import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardNumberComplete } from "../redux/cardSlice";
import { load } from "@cashfreepayments/cashfree-js";
import { themes } from "../constants/theme";
import { RootState } from "../redux/store"; // Assuming your root reducer is configured here
import { CardNumberProps } from '../types';

const CardNumber: React.FC<CardNumberProps> = ({ customStyle = {} }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.card); // Assuming your redux state has a 'card' slice

  useEffect(() => {
    const styleObject = {
      fonts: customStyle?.fonts || themes[theme]?.fonts || [{ cssSrc: "https://fonts.googleapis.com/css2?family=Lato" }],
      base: {
        fontSize: customStyle?.base?.fontSize || themes[theme]?.base?.fontSize || "16px",
        fontFamily: customStyle?.base?.fontFamily || themes[theme]?.base?.fontFamily || "Lato",
        backgroundColor: customStyle?.base?.backgroundColor || themes[theme]?.base?.backgroundColor || "#FFFFFF",
       ":focus": {
        border: customStyle?.base?.focusedBorder || themes[theme]?.base?.[":focus"]?.border || "1px solid #2361d5",  // Bracket notation used here
    },
        border: customStyle?.base?.border || themes[theme]?.base?.border || "1px solid #e6e6e6",
        borderRadius: customStyle?.base?.borderRadius || themes[theme]?.base?.borderRadius || "5px",
        padding: customStyle?.base?.padding || themes[theme]?.base?.padding || "16px",
        color: customStyle?.base?.color || themes[theme]?.base?.color || "#000000",
      },
      invalid: {
        color: customStyle?.invalidColor || themes[theme]?.invalid?.color || "#df1b41",
      },
      backgroundColor: customStyle?.backgroundColor || themes[theme]?.base?.backgroundColor || "#f6f9fb",
    };

    const cardOptions = {
      values: {
        placeholder: "Enter Card Number",
      },
      style: styleObject,
    };

    (async () => {
      const cashfree = await load({ mode: "production" });
      const cardComponent = cashfree.create("cardNumber", cardOptions);
      cardComponent.mount("#cardNumber");
      cardComponent.on("change", (data: { complete: boolean }) => {
        dispatch(cardNumberComplete(data.complete));
      });
    })();
  }, [dispatch, theme, customStyle]);

  return <div id="cardNumber" data-testid="cardNumber"/>;
};

export default CardNumber;
