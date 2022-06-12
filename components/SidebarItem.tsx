/**
 *
 * SidebarItem Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// PropTypes
type props = {
  icon?: string;
  text: string;
};

// Components
export default function SidebarItem({ icon, text }: props) {
  const iconName: IconName = icon as IconName;

  return (
    <div className="SidebarItem">
      <FontAwesomeIcon className="SidebarItem__icon" icon={iconName} />
      <label className="SidebarItem__text">{text}</label>
    </div>
  );
}
