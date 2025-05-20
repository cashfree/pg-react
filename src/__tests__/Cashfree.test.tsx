import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Cashfree from "../components/Cashfree";
import store from "../redux/store";
import * as cardSlice from "../redux/cardSlice";

describe("Cashfree Component", () => {
    beforeEach(() => {
        jest.spyOn(store, "dispatch");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("dispatches setTheme action on mount", () => {
        render(
            <Cashfree theme="dark">
                <div>Child</div>
            </Cashfree>
        );

        expect(store.dispatch).toHaveBeenCalledWith(cardSlice.setTheme("dark"));
    });

    it("calls onComplete callback with correct completeness state", () => {
        // Set the store state to all complete
        store.dispatch(cardSlice.setTheme("light"));

        store.dispatch({
            type: "card/setCardNumberComplete",
            payload: true,
        });
        store.dispatch({
            type: "card/setCardHolderNameComplete",
            payload: true,
        });
        store.dispatch({
            type: "card/setCardExpiryComplete",
            payload: true,
        });
        store.dispatch({
            type: "card/setCardCvvComplete",
            payload: true,
        });

        const onCompleteMock = jest.fn();

        render(
            <Cashfree onComplete={onCompleteMock}>
                <div>Child</div>
            </Cashfree>
        );

        // Wait for useEffect to run and call onComplete
        setTimeout(() => {
            expect(onCompleteMock).toHaveBeenCalledWith(true);
            expect(store.dispatch).toHaveBeenCalledWith(
                cardSlice.isComplete(true)
            );
        }, 0);
    });
});
