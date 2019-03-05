import axios from "axios";

export const addUnEvent = (
  idEvent,
  title,
  dateDebut,
  dateFin,
  description,
  idUser
) => {
  return axios.post(
    "http://baron-guitard-calendrierapi.herokuapp.com/private/addEvent",
    {
      idEvent: idEvent,
      title: title,
      dateDebut: dateDebut,
      dateFin: dateFin,
      description: description,
      idUser: idUser
    },
    { withCredentials: true }
  );
};
export const deleteUnEvent = idEvent => {
  return axios.post(
    "http://baron-guitard-calendrierapi.herokuapp.com/private/deleteEvent",
    {
      idEvent: idEvent
    },
    { withCredentials: true }
  );
};

export const getUnEvent = () => {};
export const getAllEvents = () => {};

export const createUser = (id, email, pass) => {
  return axios
    .post(
      "http://baron-guitard-calendrierapi.herokuapp.com/register",
      {
        id: id,
        mail: email,
        password: pass
      },
      { withCredentials: true }
    )
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.error(error);
      return error;
    });
};
export const seConnecter = (email, pass) => {
  return axios
    .post(
      "http://baron-guitard-calendrierapi.herokuapp.com/login",
      {
        mail: email,
        password: pass
      },
      { withCredentials: true }
    )
    .then(function(response) {
      console.log(response);
      localStorage.token = response.data.jwt;
      return response;
    })
    .catch(function(error) {
      console.error(error);
      return error;
    });
};
