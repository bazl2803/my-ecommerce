/**
 *
 * Button Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// PropTypes
interface Props {
  icon?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Component
export default class Button extends React.Component<Props, {}> {
  iconName: IconName = this.props.icon as IconName;

  render(): React.ReactNode {
    return (
      <button className="Button" onClick={this.props.onClick}>
        {this.iconName ? (
          <FontAwesomeIcon className="Button-icon" icon={this.iconName} />
        ) : (
          ""
        )}
        <div className="Button-text">{this.props.text}</div>
      </button>
    );
  }
}
