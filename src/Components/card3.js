import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import avatar_g from "./images/avatar_g.jpg";

export default function Card3() {
  return (
    <Card className="card-three" sx={{ maxWidth: 600 , height: 500}} >
      <CardActionArea>
        <CardMedia  className="image3" sx={{ height: 320 }} image={avatar_g} />

        <CardContent className="content3">
          <Typography className="title3">
               <h3>My Name</h3>
          </Typography>
          <Typography className="text3">
            Just me, myself and I, exploring the universe of uknownment. I have
            a heart of love and a interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
