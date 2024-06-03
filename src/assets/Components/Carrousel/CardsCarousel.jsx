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
      slideSize={{ base: "100%", md: "33%", lg: "25%", xs: "50%" }}
      slideGap={{ base: "md" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;

function Card({ img, price, id, title }) {
  return (
    <Paper
      shadow="md"
      p="md"
      radius="15"
      style={{ backgroundImage: `url(${img})` }}
      className={classes.cardcarousel}
    >
      <div className={classes.buy_buttom}>
        <h3 className={classes.carousel_price}>{price}$</h3>
        <Link to={`/item/${id}`}>
          <Button1 borderRadius={0} height={55}>
            Comprar
          </Button1>
        </Link>
      </div>
    </Paper>
  );
}
