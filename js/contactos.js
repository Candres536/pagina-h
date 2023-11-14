const gmail = document.getElementById("gmail");
const gmail_t = document.getElementById("gmail-t");

  gmail.addEventListener("mouseover", function() {
    gmail_t.textContent = "coordinacionhomeacademy@gmail.com";
  });

  gmail.addEventListener("mouseout", function() {
    gmail_t.textContent = "";
  });


  const facebook = document.getElementById("facebook");
  const facebook_t = document.getElementById("facebook-t");

  facebook.addEventListener("mouseover", function() {
    facebook_t.textContent = "https:/www.facebook.com/HomeTownLanguageAcademy";
  });

  facebook.addEventListener("mouseout", function() {
    facebook_t.textContent = "";
  });

  const what = document.getElementById("WhatsApp");
  const what_t = document.getElementById("WhatsApp-t");

  what.addEventListener("mouseover", function(){
    what_t.textContent = "https://wa.me/message/JIKXT6GJQTG7K1";
  } )

  what.addEventListener("mouseout", function(){
    what_t.textContent = "";
  } )

  const tik = document.getElementById("tiktok");
  const tik_t = document.getElementById("tiktok-t");

  tik.addEventListener("mouseover", function(){
    tik_t.textContent = "https:/www.tiktok.com/@hometownacademy"
  })
 
  tik.addEventListener("mouseout", function(){
    tik_t.textContent = ""
  })




  const insta = document.getElementById("instagram");
  const insta_t = document.getElementById("instagram-t");

  insta.addEventListener("mouseover", function(){
    insta_t.textContent = "https:/www.instagram.com/hometown.academy/"
  })
 
  insta.addEventListener("mouseout", function(){
    insta_t.textContent = ""
  })


  const twitter = document.getElementById("twitter");
  const twitter_t = document.getElementById("twitter-t");

  twitter.addEventListener("mouseover", function(){
    twitter_t.textContent = "https://twitter.com/AcademyHometown"
  })
 
  twitter.addEventListener("mouseout", function(){
    twitter_t.textContent = ""
  })

