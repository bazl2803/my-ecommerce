import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  label: string;
  value: string;
}

export default function FeatureItem({ value, label }: props) {
  return (
    <div className="FeatureItem">
      <div className="FeatureItem__value">
        <label>{value}</label>
      </div>
      <label className="FeatureItem__label">{label}</label>
    </div>
  );
}
