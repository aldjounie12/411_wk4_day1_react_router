import React, { Component } from 'react';
import { Container, Divider, Switch, CardActions } from '@material-ui/core'
// import './App.css';

function About() {
  return (
    <div>
     <center><h1>About Page</h1></center> 
    <p style={{ margin: '5%' }}>
      The DIY Garage blog is for the car enthusiast. Here you will learn how to create your own demolition derby cars or how to modify your day-to-day car to bring it to maximum power. Of course, there is news about brand cars as well, so this website can be considered a one-stop-shop for news and tutorials on fixing and improving your car.
      </p>
      <p style={{ margin: '5%' }}>
         On the Openbay Overdrive Blog, mechanics are often asked to guest post on the blog to provide their insight on repairing your cars. There are many posts for you to read in order to make the right choice regarding your car: repair at home or take to a shop? If you are having any sort of car problems or you just want to be preventive, reading this blog should be on your to-do list.
      </p>
     
      <CardActions style={{ color: 'mediumblue' }}>
                   <a>Read More...</a>
                    </CardActions>
    </div>
  );
}

export default About;

