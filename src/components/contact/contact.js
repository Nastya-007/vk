import React, { Component } from "react";
import ContactsService from "../../services/contacts-service";
import {Link} from "react-router-dom";

import "./contact.css";

export default class ListItem extends Component {
  render() {
    return (
      <form className="form-contact">
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label for="validationServer01">Name</label>
            <input
              type="text"
              className="form-control "
              id="validationServer01"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationServer02">Surname</label>
            <input
              type="text"
              className="form-control"
              id="validationServer02"
              placeholder="Last name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationServer02">Patronymic</label>
            <input
              type="text"
              className="form-control"
              id="validationServer02"
              placeholder="Patronymic"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationServerUsername">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer03">
              Birthday<i className="fa fa-calendar"></i>
            </label>
            <input
              type="date"
              name="calendar"
              className="form-control"
              id="validationServer03"
              placeholder="00.00.00"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationServer04">Telephone</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="x-xxx-xxx-xx-xx"
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Сохранить
        </button>
        <button className="btn btn-primary" type="submit">
          <Link to="/my">
          Отмена
          </Link>
        </button>
      </form>
    );
  }
}
