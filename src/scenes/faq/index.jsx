import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

import React from "react";

const FAQPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae magnam possimus similique nesciunt aperiam cupiditate in labore
            nemo dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Favorite Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae magnam possimus similique nesciunt aperiam cupiditate in labore
            nemo dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae magnam possimus similique nesciunt aperiam cupiditate in labore
            nemo dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae magnam possimus similique nesciunt aperiam cupiditate in labore
            nemo dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Random Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae magnam possimus similique nesciunt aperiam cupiditate in labore
            nemo dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQPage;
