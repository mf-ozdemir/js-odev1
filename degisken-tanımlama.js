myName.innerHTML = prompt("Adınızı giriniz")

function time(){
let tarih = new Date();
let saat = tarih.getHours();
    dakika = tarih.getMinutes();
    saniye = tarih.getSeconds();
    day = tarih.getDay();

    switch (day) {
      case 0:   day = "Pazar";
          break;
      case 1:   day = "Pazartesi";
          break;
      case 2:   day = "Salı";
          break;
      case 3:   day = "Çarşamba";
          break;
      case 4:   day = "Perşembe";
          break;
      case 5:   day = "Cuma";
          break;
      case 6:   day = "Cumartesi";
          break;
      default:
          break;
  }
  
  document.getElementById("myClock").innerHTML = (saat + ":" + dakika + ":" + saniye + " " + day)
}

setInterval(function(){time();},1000);
