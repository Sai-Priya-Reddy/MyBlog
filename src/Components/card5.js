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
    <Card sx={{ minWidth: 275 }} className="cardfull5">
      <CardContent>
        <Typography>
          <h3>Tags</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} className="grid-sp">
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Item className="travel-1" style={{backgroundColor:"#000",color:"#fff"}}>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item className="travel-2">Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item className="custom-style">Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Travel</Item>
            </Grid>
          </Grid>
        
        </Box>
      </CardContent>
    </Card>
  );
}
