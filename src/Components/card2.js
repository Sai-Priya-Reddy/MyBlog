import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import woods from "./images/bridge.jpg";

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 1100 }} className="card-full">
      <CardMedia sx={{ height: 350 }} image={woods} title="Green Iguana" />
      <CardContent>
        <div className="title-text">
          <Typography className="title-head">
            <h3> BLOG ENTRY </h3>
          </Typography>

          <Typography>
            <h5 className="des">
              Title description,<span className="date">April 2, 2014</span>
            </h5>
          </Typography>
        </div>

        <Typography>
          <p  className="content1">
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
            vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.
          </p>
        </Typography>
      </CardContent>
      <div className="button-custom1"> 
       <a href="#">READ MORE</a>
       </div>
      {/* <CardActions>
        <Button className="c1-button">Read More</Button>
      </CardActions> */}
      <Typography>
        <p className="comments-card">
          <span className="comments-text-card2">
            Comments &nbsp;<span className="two">2</span>
          </span>
        </p>
      </Typography>
    </Card>
  );
}
