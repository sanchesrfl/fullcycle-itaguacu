import React from "react";

const Chat = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container chat-container">
        <div className="row">
          <div className="col-md-8 offset-md-2 chat-box">
            <div className="title text-center">
              <h5>NOME DO GRUPO</h5>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Digite sua mensagem"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
