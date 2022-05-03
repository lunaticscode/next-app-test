import React, { FC, ReactNode, useCallback, useMemo } from "react";

export interface UIContextStateProps {
  displaySidebar: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  openModal?: (content: ReactNode) => void;
  closeModal?: () => void;
}

const initState: UIContextStateProps = {
  displaySidebar: true,
};

export const UIContext = React.createContext<UIContextStateProps | any>(
  initState
);

interface UIContextActionProps {
  type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" | "OPEN_MODAL" | "CLOSE_MODAL";
  content?: ReactNode;
}

const uiReducer = (
  state: UIContextStateProps,
  action: UIContextActionProps
) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        displaySidebar: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        displaySidebar: false,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        displayModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        displayModal: false,
      };
    default:
      return state;
  }
};

interface UIProviderProps {
  children?: ReactNode;
}
export const UIProvider: FC<UIProviderProps> = ({ children, ...rest }) => {
  const [state, dispatch] = React.useReducer(uiReducer, initState);

  const openSidebar = useCallback(
    () => dispatch({ type: "OPEN_SIDEBAR" }),
    [dispatch]
  );

  const closeSidebar = useCallback(
    () => dispatch({ type: "CLOSE_SIDEBAR" }),
    [dispatch]
  );

  const openModal = useCallback(
    (content: ReactNode) => dispatch({ type: "OPEN_MODAL", content }),
    [dispatch]
  );

  const closeModal = useCallback(
    () => dispatch({ type: "CLOSE_MODAL" }),
    [dispatch]
  );

  const contextValue = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      openModal,
      closeModal,
    }),
    [state]
  );

  return (
    <UIContext.Provider value={contextValue} {...rest}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = React.useContext<UIContextStateProps>(UIContext);
  if (context === undefined) {
    throw new Error("(!) useUIContext must be used within a UIProvider");
  }
  return context;
};
