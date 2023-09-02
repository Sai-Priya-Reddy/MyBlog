import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Card5() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "blue" }}>
      <CardContent>
        <Typography>
          <h3>Tags</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} className="grid-sp">
      <Grid container spacing={3}>
        <Grid item xs className="item1">
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid> 
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
      </CardContent>
    </Card>
  );
}
