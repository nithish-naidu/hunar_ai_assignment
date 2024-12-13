import { FormControl, TextField, useMediaQuery, useTheme } from "@mui/material";
import { FALLBACK_IMG_URL } from "../../../helper/constants";

const ImageBased = ({
  question,
  image_description = "",
  image_url = "",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormControl fullWidth>
      <h4>{image_description}</h4>
      <img
        width={isMobile ? "100%" : 400}
        height={200}
        src={image_url || FALLBACK_IMG_URL}
        alt={image_description}
      />
      <TextField sx={{ mt: 2 }} variant="outlined" label={question} fullWidth />
    </FormControl>
  );
};

export default ImageBased;
