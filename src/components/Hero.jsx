import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src="https://www.commoninja.com/_next/image?url=https%3A%2F%2Fwebsite-assets.commoninja.com%2Fdistribution%2F1686124768182_image-grid-slider-layouts.png&w=1920&q=75"
      />
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
