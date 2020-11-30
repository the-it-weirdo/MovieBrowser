import React from "react";
import GraphicalUIResponse from "../components/GraphicalUIResponse";
import { RESPONSE_STATE } from "../api/API";
import notFound from "../../assets/not-found.png";
import sad from "../../assets/sad.png";
import wavingHand from "../../assets/waving-hand.png";

export default function renderGraphicalUIResponse(firstLoad, response) {
  let imageSource = "";
  let text = "";

  if (firstLoad) {
    text = "Hello there,\nGo ahead and search some movies.";
    imageSource = wavingHand;
  } else {
    switch (response) {
      case RESPONSE_STATE[1]:
        text =
          "Sorry, couldn't find anything. Please try again with a different keyword.";
        imageSource = notFound;
        break;
      case RESPONSE_STATE[2]:
        text =
          "OOPS!! It's not you. It's us. Something is bad in our server. Try again later.";
        imageSource = sad;
        break;
      case RESPONSE_STATE[3]:
        text =
          "Something went wrong. Are you sure you have an active Internet connection ?";
        imageSource = sad;
        break;
      default:
        break;
    }
    text += `\n\nError: ${response}`;
  }

  return <GraphicalUIResponse text={text} imageSource={imageSource} />;
}
