import "./Navbar.css";
//should be importing the image

export default function Navbar() {
  return (
    <nav className="nav">
      <img
        className="nav__logo-img"
        src="https://scrimba.com/blobs/sha1:34a1fdbeb1b44153022c4aead155793ec87ac9a4.png"
      />
    </nav>
  );
}
