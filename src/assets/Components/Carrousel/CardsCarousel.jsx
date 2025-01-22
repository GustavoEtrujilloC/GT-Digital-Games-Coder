import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Paper, useMantineTheme } from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import Button1 from "../Buttons/Button1";
import { useProducts } from "../../../context/ProductosContext";
import { Link } from "react-router-dom";
import "./CardsCarousel.module.css";

function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { productos } = useProducts();

  const slides = productos.map((item, id) => {
    return (
      <Carousel.Slide key={id}>
        <Card
          id={item.id}
          price={item.precio}
          img={item.imagenPortada}
          title={item.titulo}
        />
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      slideSize={{ base: "20%" }}
      slideGap={{ base: "md" }}
      slidesToScroll={mobile ? 1 : 1}
      initialSlide={mobile ? 0 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;

function Card({ img, price, id }) {
  return (
    <Paper
      shadow="md"
      p="lg"
      radius="15"
      style={{ backgroundImage: `url(${img})` }}
      className={classes.cardcarousel}
    >
      <div className={classes.buy_buttom}>
        <h3 className={classes.carousel_price}>{price}$</h3>
        <Link to={`/item/${id}`}>
          <button className={classes.carousel_button}>Comprar</button>
        </Link>
      </div>
    </Paper>
  );
}
