import polygon from "./Polygon.png";
export default function Header() {
  return (
    <div className="header">
      <div className='header-first'>
        <img src={polygon}></img>
        <h1>Agency</h1>
      </div>
      <ul>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
      </ul>
      <button>Contact</button>
    </div>
  );
}
