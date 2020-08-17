import React from "react";
import {Link} from "react-router-dom";

import "./home-page.css";

const HomePage = () => {
return(
    <div className="home-page">
        <h1 className="wel">Добро пожаловать!</h1>
        <p className="text">Это приложение для ведение электронной записной книжки.
        </p><br/>
        <h6> Для продолжение работы необходимо авторизоваться</h6>
        <button type="button" class="btn btn-secondary">
            <Link to="/admin">
                Авторизоваться
                </Link>
                </button>
    </div>
)

}

export default HomePage;