const urlPath =
  "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/";
(function getImgUrl() {
  const imgEle = document.getElementsByTagName("img");
  Array.from(imgEle).forEach((element) => {
    const relativePath = element.getAttribute("src");
    const imgName = relativePath.slice("./images/".length);
    element.src = urlPath + imgName;
  });
})();
