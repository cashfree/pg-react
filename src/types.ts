export interface CustomStyle {
    fonts?: { cssSrc: string }[];
    base?: {
      fontSize?: string;
      fontFamily?: string;
      backgroundColor?: string;
      focusedBorder?: string;
      border?: string;
      borderRadius?: string;
      padding?: string;
      color?: string;
    };
    invalidColor?: string;
    backgroundColor?: string;
    cardlayoutBackground?:string;
  }
  
 export interface CardNumberProps {
    customStyle?: CustomStyle;
  }
  