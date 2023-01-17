import { convertToLink } from "../../utils/convertToLink";

import "./NavList.css";

function NavList(props) {
  return (
    <div>
      <h6 className="nav-title">{props.title}</h6>
      <nav className="nav-list">
        {props.items.map((item, index) => (
          <a
            href={typeof item === "object" ? item.link : convertToLink(item)}
            key={index}
          >
            <span>{typeof item === "object" ? item.label : item}</span>
            {typeof item === "object" && item.ping ? (
              <span className="ping" />
            ) : null}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default NavList;
