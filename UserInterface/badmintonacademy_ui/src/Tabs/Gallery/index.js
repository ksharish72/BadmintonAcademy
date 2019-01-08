import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import axios from "axios";
import { serverUrl } from "../settings";

class Gallery extends React.Component {
  componentWillMount() {
    var url = serverUrl + "/api/gallery/getallphotos";
    axios.get(url).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>
              1. Kanchipuram District Ranking Badminton Tournament(28th December
              to 30th December 2018)
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Under 13 & Under 15 Category</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Under 17 Category</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Under 19 Category</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default Gallery;
