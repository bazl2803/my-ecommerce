import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface props {
  categories: { id: string; icon: string; name: string }[];
}

const CategoriesList = ({ categories }: props) => {
  return (
    <div className="CategoriesList">
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            href="/category/[id]"
            as={`/product/${category.id}`}
          >
            <a>
              <div className="CategoryCard__icon">
                <FontAwesomeIcon icon={category.icon as IconName} />
              </div>
              <div className="CategoryCard__label">{category.name}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesList;
