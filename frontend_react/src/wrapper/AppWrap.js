import { NavigationDots, SocialMedia } from '../components';

// Higher-Order-Component to wrap other components inside of.
const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text p-inline">© 2022 Ruben&nbsp;</p>
                    <span className="copyright-dashes">||&nbsp;</span>
                    <p className="p-text p-inline">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap