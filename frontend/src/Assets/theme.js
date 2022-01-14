import { createTheme } from "@material-ui/core/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: { main: colors.black },
  },
});

export default theme;
