using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace StreamVideoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        public WeatherForecastController()
        {

        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetVideoPath()
        {
            string videoFilePath = Path.Combine(Directory.GetCurrentDirectory(), "beauty-and-the-beast-1991_480.mp4"); ;

            return PhysicalFile(videoFilePath, "video/mp4", enableRangeProcessing: true);
        }
    }
}