import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (WrappedComponent, idName, classNames) => {
  const AppWrapper = (props) => {
    const { className, ...restProps } = props;

    return (
      <div id={idName} className={`app__container ${classNames} ${className}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <WrappedComponent {...restProps} />

          <div className="copyright">
            <p className="p-text">© 2024 | SANDESH HEGDE</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

  return AppWrapper;
};

export default AppWrap;
