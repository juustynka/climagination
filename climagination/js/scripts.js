// mobile navigation script 
function toggleMobileNavigation() {
    var navigation = document.querySelector(".mobile-navigation-links");
    if (navigation.style.display === "block") {
      navigation.style.display = "none";
    } else {
      navigation.style.display = "block";
    }
  }

  // redirecting on button click script 

  document.getElementById("myButton").onclick = function () {
      location.href = "article.html";
  };
