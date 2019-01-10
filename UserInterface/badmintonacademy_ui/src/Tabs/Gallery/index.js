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
      under19PhotoSet: [],
      showFirstPhotoSet: false,
      showSecondPhotoSet: false,
      showThirdPhotoSet: false
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
  handlefirstaccordionclick = () => {
    this.setState({
      showFirstPhotoSet: true
    });
  };
  handlesecondaccordionclick = () => {
    this.setState({
      showSecondPhotoSet: true
    });
  };
  handlethirdaccordionclick = () => {
    this.setState({
      showThirdPhotoSet: true
    });
  };
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
          <div onClick={this.handlefirstaccordionclick}>
            <AccordionItem title="Under 13 & Under 15 Category">
              {this.state.showFirstPhotoSet && (
                <Gallery
                  images={under13and15PhotoSet}
                  enableImageSelection={false}
                />
              )}
            </AccordionItem>
          </div>
          <div onClick={this.handlesecondaccordionclick}>
            <AccordionItem title="Under 17 Category">
              {this.state.showSecondPhotoSet && (
                <Gallery
                  images={under17PhotoSet}
                  enableImageSelection={false}
                />
              )}
            </AccordionItem>
          </div>
          <div onClick={this.handlethirdaccordionclick}>
            <AccordionItem title="Under 19 Category">
              {this.state.showThirdPhotoSet && (
                <Gallery
                  images={under19PhotoSet}
                  enableImageSelection={false}
                />
              )}
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    );
  }
}

export default GalleryTab;
