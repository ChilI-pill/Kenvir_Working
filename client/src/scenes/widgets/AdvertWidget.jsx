import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/falseadvertising.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Bob's Burger</Typography>
        <Typography color={medium}>bobsburger.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Bite into the Juiciest, Most Mouthwatering Burgers in Town.
      made with 100% fresh, never-frozen beef and cooked to perfection just for you.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;