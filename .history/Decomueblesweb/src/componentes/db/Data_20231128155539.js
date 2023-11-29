import { AiFillStar } from "react-icons/ai";

const data = async () => {
  try {
    const response = await fetch("https://decomuebles-api.up.railway.app/g/MostrarMuebles");
    const rawData = await response.json();

    const formattedData = rawData.map((item) => ({
      img: item.img,
      title: item.title,
      star: <AiFillStar className="rating-star" />,
      reviews: `(${item.reviews} reviews)`,
      prevPrice: item.prevPrice,
      newPrice: item.newPrice,
      company: item.company,
      color: item.color,
      category: item.category,
    }));

    console.log(formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default data;
