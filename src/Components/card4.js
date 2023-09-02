import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import workshop from "./images/workshop.jpg";
import gondol from "./images/gondol.jpg";
import skies from "./images/skies.jpg";
import rock from "./images/rock.jpg";

export default function Card4() {
  return (
    <Card className="container-card4">
        <h3 className="popular">Popular Posts</h3>
      <CardContent>
        <div className="container">
          <List className="list-card">
            <ListItem button>
              <CardMedia
                className="image3"
                sx={{ height: "50px", width: "50px" }}
                image={workshop}
              />
              <ListItemText primary="Lorem" className="inbox1" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <CardMedia
                className="image4"
                sx={{ height: "50px", width: "50px" }}
                image={gondol}
              />
              <ListItemText primary="Lpsum" className="lpsum1" />
            </ListItem>
            <ListItem button>
              <CardMedia
                className="image5"
                sx={{ height: "50px", width: "50px" }}
                image={skies}
              />
              <ListItemText primary="Dorum" className="dorum1" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <CardMedia
                className="image6"
                sx={{ height: "50px", width: "50px" }}
                image={rock}
              />
              <ListItemText primary="Mingsum" className="mingsum" />
            </ListItem>
          </List>
        </div>
      </CardContent>
    </Card>
  );
}
