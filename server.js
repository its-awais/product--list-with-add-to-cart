import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
app.use(express.static("public"));

app.get("/api/productsList", (req, res) => {
  const productsList = [
    {
      image: {
        thumbnail: "/images/image-waffle-thumbnail.jpg",
        mobile: "/images/image-waffle-mobile.jpg",
        tablet: "/images/image-waffle-tablet.jpg",
        desktop: "/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      id: 0,
      category: "Waffle",
      price: 6.5,
    },
    {
      image: {
        thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
        mobile: "/images/image-creme-brulee-mobile.jpg",
        tablet: "/images/image-creme-brulee-tablet.jpg",
        desktop: "/images/image-creme-brulee-desktop.jpg",
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      id: 1,
      price: 7.0,
    },
    {
      image: {
        thumbnail: "/images/image-macaron-thumbnail.jpg",
        mobile: "/images/image-macaron-mobile.jpg",
        tablet: "/images/image-macaron-tablet.jpg",
        desktop: "/images/image-macaron-desktop.jpg",
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
    },
    {
      image: {
        thumbnail: "/images/image-tiramisu-thumbnail.jpg",
        mobile: "/images/image-tiramisu-mobile.jpg",
        tablet: "/images/image-tiramisu-tablet.jpg",
        desktop: "/images/image-tiramisu-desktop.jpg",
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      id: 2,
      price: 5.5,
    },
    {
      image: {
        thumbnail: "/images/image-baklava-thumbnail.jpg",
        mobile: "/images/image-baklava-mobile.jpg",
        tablet: "/images/image-baklava-tablet.jpg",
        desktop: "/images/image-baklava-desktop.jpg",
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      id: 3,
      price: 4.0,
    },
    {
      image: {
        thumbnail: "/images/image-meringue-thumbnail.jpg",
        mobile: "/images/image-meringue-mobile.jpg",
        tablet: "/images/image-meringue-tablet.jpg",
        desktop: "/images/image-meringue-desktop.jpg",
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      id: 4,
      price: 5.0,
    },
    {
      image: {
        thumbnail: "/images/image-cake-thumbnail.jpg",
        mobile: "/images/image-cake-mobile.jpg",
        tablet: "/images/image-cake-tablet.jpg",
        desktop: "/images/image-cake-desktop.jpg",
      },
      name: "Red Velvet Cake",
      category: "Cake",
      id: 5,
      price: 4.5,
    },
    {
      image: {
        thumbnail: "/images/image-brownie-thumbnail.jpg",
        mobile: "/images/image-brownie-mobile.jpg",
        tablet: "/images/image-brownie-tablet.jpg",
        desktop: "/images/image-brownie-desktop.jpg",
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      id: 6,
      price: 4.5,
    },
    {
      image: {
        thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
        mobile: "/images/image-panna-cotta-mobile.jpg",
        tablet: "/images/image-panna-cotta-tablet.jpg",
        desktop: "/images/image-panna-cotta-desktop.jpg",
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      id: 7,
      price: 6.5,
    },
  ];
  res.send(productsList);
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
