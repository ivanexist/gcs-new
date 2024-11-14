import { div } from "framer-motion/client";

const Index1 = () => {
  let imageElemen = document.querySelectorAll(".image");

  imageElemen = imageElemen.forEach((items) => {
    console.log(items);

    if (items) {
      items.style.position = "";
      items.style.left = "";
    }
  });

  return div > div;
};
export default Index1;
