const City = document.getElementById("city");
const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const Wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const container = document.getElementById("container");

async function WeatherApi() {
  const search_City = document.getElementById("search").value;
  try {
    const Weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search_City}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
    );
    let result = await Weather.json();

    const weatherIcons = {
      "clear sky": "☀",
      "few clouds": "🌤",
      "scattered clouds": "☁",
      "broken clouds": "🌥",
      "shower rain": "🌧",
      rain: "🌦",
      thunderstorm: "⛈",
      snow: "❄",
      mist: "🌫",
      haze: "🌫",
      dust: "🌪",
      sand: "🌪",
      fog: "🌫",
      tornado: "🌪",
      volcano: "🌋",
      smoke: "🌫",
      "overcast clouds": "☁",
      "light rain": "🌦",
      "moderate rain": "🌧",
      "heavy rain": "🌧",
      "isolated thunderstorm": "⛈",
      "light snow": "🌨",
      "heavy snow": "❄",
      "freezing rain": "🌧",
      sleet: "🌧",
      clear: "☀",
      "partly cloudy": "🌤",
    };
    City.textContent = result.name + "  " + result.sys.country;
    icon.innerText = weatherIcons[result.weather[0].description];
    temp.innerText = `${Math.floor(result.main.temp)}°C`;
    desc.textContent = result.weather[0].description;
    Wind.innerText = `Wind :${result.wind.speed} km/h`;
    humidity.textContent = `Humidity :${result.main.humidity}--%`;
    pressure.textContent = `Presuure :${result.main.pressure}--mb`;
    Error_msg.innerText = "   ";
    const background = {
      "clear sky": "url(https://wallpapercave.com/wp/wp10154412.jpg)",
      "few clouds":
        "url(https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      "scattered clouds":
        "url(https://static.vecteezy.com/system/resources/previews/001/927/603/non_2x/clouds-scattered-across-the-sky-free-photo.jpg)",
      "broken clouds":
        "url(https://img.freepik.com/free-photo/nature-beauty-reflected-tranquil-waves-generated-by-ai_188544-15635.jpg)",
      "shower rain":
        "url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/rain/leaves-and-rain.jpg)",
      rain: "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg)",
      thunderstorm:
        "url(https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?cs=srgb&dl=pexels-andre-furtado-43594-1162251.jpg&fm=jpg)",
      snow: "url(https://nychazardmitigation.com/wp-content/uploads/2024/07/20170314_Snowy_Street_2-edited.jpg)",
      mist: "url(https://images.pexels.com/photos/163323/fog-dawn-landscape-morgenstimmung-163323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      haze: "url(https://wallpapercave.com/wp/wp10154412.jpg)",
      dust: "url(https://images.unsplash.com/photo-1662377824580-a540e7728635?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3QlMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D)",
      sand: "url(https://media.licdn.com/dms/image/v2/D5612AQGxRdB15WuGJg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709285615505?e=2147483647&v=beta&t=ZrQTP5mdZCcgssSyBGQvTHIZ_Ei_KX6ZWN8qipvN-J8)",
      fog: "url(https://www.salina.com/gcdn/authoring/2020/01/14/NSAJ/ghows-KS-9c1c6764-dc32-5196-e053-0100007ffdaf-9242f86b.jpeg)",
      tornado:
        "url(https://as1.ftcdn.net/v2/jpg/05/54/60/78/1000_F_554607802_cqgTC1WmpRsgzOHy3Og1rMjjtZv7naqg.jpg)",
      volcano:
        "url(https://images.pexels.com/photos/2609952/pexels-photo-2609952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      smoke:
        "url(https://plus.unsplash.com/premium_photo-1666794846529-2405a495da00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      "overcast clouds":
        "url(https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      "light rain":
        "url(https://images.pexels.com/photos/870802/pexels-photo-870802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      "moderate rain":
        "url(https://assets.thehansindia.com/h-upload/2024/09/13/1479705-rainfall.webp)",
      "heavy rain":
        "url(https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?cs=srgb&dl=pexels-pixabay-459451.jpg&fm=jpg)",
      "isolated thunderstorm":
        "url(https://i.natgeofe.com/n/69b8e411-9ed2-4150-ab5b-1f7567033a21/lightning-storm-superstition-mountains-arizona.jpg)",
      "light snow":
        "url(https://images.unsplash.com/photo-1613276017118-b269f1589d4d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBzbm93fGVufDB8fDB8fHww)",
      "heavy snow":
        "url(https://i.guim.co.uk/img/media/c0e84efe6cebc491d908c6a83ae9e62c96b637b2/0_132_3958_2375/master/3958.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8167181383a069faaea2363ae470defa)",
      "freezing rain":
        "url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/frost/freezing-rain-on-a-branch.jpg)",
      sleet:
        "url(https://images.pexels.com/photos/42160/pexels-photo-42160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      clear:
        "url(https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      "partly cloudy":
        "url(https://media.gettyimages.com/id/1390870786/photo/image-of-a-partly-cloudy-and-partly-clear-sky-during-the-day-united-states-usa.jpg?s=612x612&w=0&k=20&c=n73vxJsA4jqfuoOaGaj3TlpciiwDJYvcmt1VfspgeJA=)",
    };

    const Weather_condition = result.weather[0].description.toLowerCase();
    document.body.style.backgroundImage =
      background[Weather_condition] || background.default;
  } catch (error) {
    let Error_msg = document.getElementById("Error_msg");

    Error_msg.innerText = "No cities Found ";
  }
}
