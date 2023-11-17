import {Link, Outlet} from "react-router-dom";
import "./LayoutDefault.scss"
import CartMini from "../../components/CartMini";

function LayoutDefault() {

    return (
        <>
            <header className="layout-default__header">
                <div className="layout-default__logo">
                    <Link to="/">Logo</Link>
                </div>
                <div className="layout-default__cart">
                    <CartMini/>

                </div>
            </header>
            <div className="layout-default">
                <main className="layout-default__main">
                    <Outlet/>
                </main>
                <footer className="layout-default__footer">
                    copyright by nguyen kien
                </footer>
            </div>
        </>
    )

}

export default LayoutDefault;