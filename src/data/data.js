import img1thumb from "../images/image-product-1-thumbnail.jpg"
import img2thumb from "../images/image-product-2-thumbnail.jpg"
import img3thumb from "../images/image-product-3-thumbnail.jpg"
import img4thumb from "../images/image-product-4-thumbnail.jpg"
import img1desktop from "../images/image-product-1.jpg"
import img2desktop from "../images/image-product-2.jpg"
import img3desktop from "../images/image-product-3.jpg"
import img4desktop from "../images/image-product-4.jpg"
const thumbnailImgs = [img1thumb, img2thumb, img3thumb, img4thumb]
const desktopImgs = [img1desktop, img2desktop, img3desktop, img4desktop]
export const navLinks = [
  {
    nav_id: 1,
    navLink: "collections",
    navUrl: "#",
  },
  {
    nav_id: 2,
    navLink: "men",
    navUrl: "#",
  },
  {
    nav_id: 3,
    navLink: "women",
    navUrl: "#",
  },
  {
    nav_id: 4,
    navLink: "about",
    navUrl: "#",
  },
  {
    nav_id: 5,
    navLink: "contact",
    navUrl: "#",
  },
]

export const productList = [
  {
    company: "Sneaker Company",
    product_name: "Fall Limited Edition Sneakers",
    product_description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    thumbnailImgs: thumbnailImgs,
    desktopImgs: desktopImgs,
  },
]
