// let color = ['Blue','Red','Black','White','Orange','Brown','Grey','Pink','Purple','Yellow','Green']
// let tS = prompt("What color do you like?")

// if (color.indexOf(tS) > -1) {
//     alert(tS)
// }
// // let bt = document.querySelector('#play')
const herName = "Falisa";
const h1 = document.querySelector('header1')
// const bT = document.getElementById('#cHange').innerText

const hNy = () => {

    let yourName = prompt("Give me a your name?");

    if (yourName === herName) {
        alert("Merry Christmas!!! YinDeeDueyNa!! DooLaeSukKhaParpDuey PeeMaiLaew KengMark TorKhuenIkLaew YimYerYerNa MeeKwamSukMarkMark YouTongNeeSarMer");
        document.getElementById('test').innerText = 'Play again?'
    }
        
    else {
        alert("Please try again");
        hNy()

    }
}
// bt.onClick = 

document.addEventListener('DOMContentLoaded', function () {
  const animatedCircle = document.getElementById('animated-circle');
  let animationCount = 0;

  function animate() {
    if (animationCount < 10) {
      animatedCircle.style.animation = 'none';
      setTimeout(() => {
        animatedCircle.style.animation = 'animateCircle 10s linear infinite';
        animationCount++;
        animate();
      }, 1000);
    } else {
      document.body.style.backgroundColor = 'transparent';
    }
  }

  animate();
});


// หยุดทำงานเมื่อครบรอบ 10 ครั้ง
setTimeout(() => {
  cancelAnimationFrame(animationFrame);
}, 10000);

function changeBackgroundImage() {
  
  // ตัวอย่าง URL ของรูปภาพใหม่
  var newImageUrl = "url(./4U.jpg)";

  // กำหนด background-image ให้กับอิเล็มเมนต์
  document.body.style.backgroundImage = newImageUrl;
}
changeBackgroundImage();

// ฟังก์ชันสร้างแท็ก HTML
function createHtmlElement(tagName, attribute, content) {
  var element = document.createElement(tagName);

  if (attribute) {
    for (var key in attribute) {
      if (attribute.hasOwnProperty(key)) {
        element.setAttribute(key, attribute[key]);
      }
    }
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
}
var playA = createHtmlElement("div", { "class": "playA" });
var button = createHtmlElement("button", { "onclick": "adD()" }, "Let's do it");
var container = createHtmlElement("div", { "class": "container" });
var image = createHtmlElement("img",{"src":"./test.jpg","alt":""})
var sound = createHtmlElement("audio",{"controls":"controls"})
var soosound = createHtmlElement("source",{"src":"./","type":"audio/"})

  const createNow = ()=>{

    container.appendChild(playA);
    playA.appendChild(button);

    // เพิ่ม div.container เข้าไปใน body
    document.body.appendChild(container);
  }
  createNow();
  
  // ตัวอย่างการใช้ฟังก์ชัน
//   var heading = createHTMLTag('h1', 'สวัสดี, โลก!', { 'class': 'main-heading', 'id': 'greeting' });
  
  // เพิ่ม element ลงใน body ของเอกสาร
//   document.body.appendChild(heading);



function adD() {
  // สร้าง h1 และ h2
  var h1 = createHtmlElement("h1", null, "Happy Birthday Nakrub!!");
  var h2 = createHtmlElement("h2", null, "Falisa Wang-Ei");
  var playB = createHtmlElement("div",{"class":"playB"});
  // สร้าง div.playA และเพิ่ม h1 และ h2 เข้าไป
  container.appendChild(playB);
  playB.appendChild(h1);
  // playB.appendChild(image);
  playB.appendChild(h2);

  button.remove();

  document.body.style.backgroundImage = "url(./24U.jpg)";
  // สร้าง button และกำหนดค่า onclick เป็นฟังก์ชัน adD

  // สร้าง div.container และเพิ่ม div.playA และ button เข้าไป
  
}