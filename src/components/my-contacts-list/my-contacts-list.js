import React, { Component } from "react";
import ContactsService from "../../services/contacts-service";
import { Link } from "react-router-dom";

import "./my-contacts-list.css";

export default class MyContacts extends Component {
  state = {
    contacts: [
      {
        Name: "Alex",
        Surname: "Bondar",
        Patronymic: "Serk",
        Email: "text.@mail.ru",
        Birthday: "1987-12-12",
        Telephone: "894444444",
      },
    ],
  };

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const { contacts } = this.state;
    if (!contacts) {
      return;
    }
  }

  render() {
    //const { label, onDeleted = false } = this.props;

    const contacts = this.state.contacts;

    return (
      <div>
        <button type="button" className="btn btn-secondary dav">
          <Link to="/list"> Добавить</Link>
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Отчество</th>
              <th scope="col">EMail</th>
              <th scope="col">День Рождения</th>
              <th scope="col">Телефон</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {contacts.map((contact) => {
                return (
                  <>
                    <td>{contact.Name}</td>
                    <td>{contact.Surname}</td>
                    <td>{contact.Patronymic}</td>
                    <td>{contact.Email}</td>
                    <td>{contact.Birthday}</td>
                    <td>{contact.Telephone}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-success btn-sm float-right"
                      >
                        <Link to="/list">
                        <i className="fa fa-pencil" />
                        </Link>
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </td>
                  </>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
