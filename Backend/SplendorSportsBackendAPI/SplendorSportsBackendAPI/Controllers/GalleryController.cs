using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Windows.Media.Imaging;

namespace SplendorSportsBackendAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs
    public class GalleryController : ApiController
    {
        private static string tournamentFolderName = "KDBA_Tournament_Photos";
        private static string appDataPath = Directory.GetParent( AppDomain.CurrentDomain.GetData("DataDirectory").ToString()).FullName;
        private static string FirstDay = Path.Combine(appDataPath, tournamentFolderName, "28.12.18");
        private static string SecondDay = Path.Combine(appDataPath, tournamentFolderName, "29.12.18");
        private static string ThirdDay = Path.Combine(appDataPath, tournamentFolderName, "30.12.18");

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/gallery/getallphotos")]
        public PhotosWrapper GetAllPhotos()
        {
            List<Day> daysList = new List<Day>();
            daysList.Add(GetDayPhotos(FirstDay, "Under 13 and Under 15", "28.12.18"));
            daysList.Add(GetDayPhotos(SecondDay, "Under 17", "29.12.18"));
            daysList.Add(GetDayPhotos(ThirdDay, "Under 19", "30.12.18"));
            return new PhotosWrapper()
            {
                DaysList = daysList
            };
        }

        private Day GetDayPhotos(string day, string category, string date)
        {
            List<Photo> dayPhotosList = new List<Photo>();
            foreach (string f in Directory.GetFiles(day, "*.jpg"))
            {
                string fileName = new FileInfo(f).Name;
                Photo photoObj = new Photo()
                {
                    FileName = fileName,
                    ImageSrc = $"/{tournamentFolderName}/{date}/{fileName}"
                };
                dayPhotosList.Add(photoObj);
            }
            Day dayObj = new Day()
            {
                CategoryName = category,
                Date = date,
                PhotosList = dayPhotosList
            };
            return dayObj;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
