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
import Gallery from "react-grid-gallery";

class GalleryTab extends React.Component {
  componentWillMount() {
    this.state = {
      under13and15PhotoSet: [],
      under17PhotoSet: [],
      under19PhotoSet: []
    };
    var url = serverUrl + "/api/gallery/getallphotos";
    axios.get(url).then(response => {
      var under13and15PhotoSet = this.getPhotoSet(
        response.data.DaysList[0].PhotosList
      );
      var under17PhotoSet = this.getPhotoSet(
        response.data.DaysList[1].PhotosList
      );
      var under19PhotoSet = this.getPhotoSet(
        response.data.DaysList[1].PhotosList
      );

      this.setState({
        under13and15PhotoSet: under13and15PhotoSet,
        under19PhotoSet: under19PhotoSet,
        under17PhotoSet: under17PhotoSet
      });
    });
  }
  getPhotoSet(PhotosList) {
    var PhotoSet = [];
    PhotosList.forEach(photo => {
      var obj = {
        src: serverUrl + photo.ImageSrc,
        thumbnail: serverUrl + photo.ImageSrc,
        thumbnailWidth: 320,
        thumbnailHeight: 174
      };
      PhotoSet.push(obj);
    });
    return PhotoSet;
  }
  render() {
    const {
      under13and15PhotoSet,
      under17PhotoSet,
      under19PhotoSet
    } = this.state;

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
                  <Gallery
                    images={under13and15PhotoSet}
                    enableImageSelection={false}
                  />
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Under 17 Category</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <Gallery
                    images={under17PhotoSet}
                    enableImageSelection={false}
                  />
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Under 19 Category</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <Gallery
                    images={under19PhotoSet}
                    enableImageSelection={false}
                  />
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default GalleryTab;
