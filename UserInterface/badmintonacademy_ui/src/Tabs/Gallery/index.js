import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

// Demo styles, see 'Styles' section below for some notes on use.
import axios from "axios";
import { serverUrl } from "../settings";
import Gallery from "react-grid-gallery";
import styles from "./index.css";

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
        response.data.DaysList[2].PhotosList
      );

      this.setState({
        under13and15PhotoSet: under13and15PhotoSet.splice(0, 2),
        under19PhotoSet: under19PhotoSet.splice(0, 2),
        under17PhotoSet: under17PhotoSet.splice(0, 2)
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
      <div>
        <h3 style={{ padding: "15px 15px 15px 15px" }}>
          1. Kanchipuram District Ranking Badminton Tournament(28th December to
          30th December 2018)
        </h3>
        <Accordion atomic={true}>
          <AccordionItem title="Under 13 & Under 15 Category">
            <Gallery
              images={under13and15PhotoSet}
              enableImageSelection={false}
            />
          </AccordionItem>

          <AccordionItem title="Under 17 Category">
            <Gallery images={under17PhotoSet} enableImageSelection={false} />
          </AccordionItem>

          <AccordionItem title="Under 19 Category">
            <Gallery images={under19PhotoSet} enableImageSelection={false} />
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default GalleryTab;
