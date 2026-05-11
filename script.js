console.log("Website Cilokba berhasil dimuat!");
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

console.log("Website Cilokba berhasil dimuat!");
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  setTimeout(() => {
    item.style.transition = "0.6s ease";
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  }, index * 150);
});