import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface props {
  id: string;
  icon: string;
  name: string;
}

const CategoryCard = ({ id, icon, name }: props) => {
  return (
    <div className="Category">
      <Link key={id} href="/category/[id]" as={`/category/${id}`}>
        <a>
          <div className="CategoryCard__icon">
            <FontAwesomeIcon icon={icon as IconName} />
          </div>
          <div className="CategoryCard__label">{name}</div>
        </a>
      </Link>
    </div>
  );
};

export default CategoryCard;
