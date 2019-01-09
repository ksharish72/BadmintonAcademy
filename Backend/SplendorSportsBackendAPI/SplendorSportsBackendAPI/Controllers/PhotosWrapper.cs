using System;
using System.Collections.Generic;

namespace SplendorSportsBackendAPI.Controllers
{
    public class PhotosWrapper
    {
       public List<Day> DaysList { get; set; }
    }

    public class Day
    {
        public string CategoryName { get; set; }
        public string Date { get; set; }
        public List<Photo> PhotosList { get; set; }
    }

    public class Photo
    {
        public string ImageSrc { get; set; }
        public string FileName { get; set; }
    }
}