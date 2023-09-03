/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import woods from "./images/woods.jpg";

export default function card1() {
  return (
    <Card sx={{ maxWidth: 1100 }} className="card-full">
      <CardMedia sx={{ height: 350 }} image={woods} title="Green Iguana" />
      <CardContent>
        <div className="title-text">
          <Typography className="title-head">
            <h3> TITLE HEADING </h3>
          </Typography>

          <Typography>
            <h5 className="des">
              Title description,<span className="date">April 7, 2014</span>
            </h5>
          </Typography>
        </div>

        <Typography>
          <p className="content1">
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
       {/* <button className="read-more2">Read More</button> */}
       </div>
      {/* <CardActions>
        <Button className="c1-button">Read More</Button>
      </CardActions> */}
      <Typography>
        <p className="comments">
          <span className="comments-text">
            Comments &nbsp;<span className="zero">0</span>
          </span>
        </p>
      </Typography>
    </Card>
  );
}
