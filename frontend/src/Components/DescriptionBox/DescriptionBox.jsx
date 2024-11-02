import React from 'react'
import './DescriptionBox.css'
import { Box, Typography, Paper, Divider, Grid2, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const DescriptionBox = ( {name} ) => {
  return (
    <Box sx={{ maxWidth: 1600 , margin: 'auto', padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" fontWeight="bold" color='#3d3434' gutterBottom>
          Description
        </Typography>
        <Divider />
        <Typography variant="h5" color="primary" sx={{ mt: 2, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
          Single Origin, Dark Roast Coffee K-Cups by The Coffee Bean & Tea Leaf yield coffee with a dark and distinctive
          flavor and fragrant aroma. Each box includes 10 K-Cup single serve pods. Gently nurtured in the lush Balinese
          highlands and expertly roasted in small batches to perfection, our Single Origin Bali Blue Moon Dark Roast
          Coffee delights with a fragrant toffee aroma, indulgent notes of chocolate and nuts, and a crisp black cherry
          finish.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
            {name} coffee beans are grown at an altitude between 3200 and 3900 feet, under shade trees, with
            orange and tangerine trees planted between the rows of coffee. Harvesting is done from May to October when
            only ripe fruit is picked, and the coffee is then semi-washed with a two-step sun drying process. Expertly
            roasted in small batches for optimal taste and quality.
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" color='#3d3434'>
            Flavor Profile
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item>
              <Typography variant="body2">• Dark Chocolate</Typography>
            </Grid2>
            <Grid2 item>
              <Typography variant="body2">• Toffee</Typography>
            </Grid2>
            <Grid2 item>
              <Typography variant="body2">• Black Cherry</Typography>
            </Grid2>
          </Grid2>
        </Box>

        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              Brewing Instructions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Use with Keurig compatible beverage systems including Keurig 2.0.0 Keurig® and K-Cup® are registered
              trademarks owned by Keurig Green Mountain, Inc. International Coffee & Tea, LLC is not associated with
              Keurig Green Mountain, Inc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              Taste Profile
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              A good coffee should have a well-rounded and balanced flavor. It should not taste overly bitter or sour, which can indicate poor-quality beans or improper roasting.
              Notes such as sweetness, acidity, and body (the "mouthfeel" or weight of the coffee) are common in high-quality coffee. These notes vary depending on the origin and roast profile.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  )
}

export default DescriptionBox