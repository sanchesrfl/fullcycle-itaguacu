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
            <div className="date text-center">
              <p>28 de agosto de 2023</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-right d-flex justify-content-end mb-4">
            <div className="contact-right">Você</div>
          </div>

          <div className="bubble-right d-flex justify-content-end mb-4">
            <div className="bubble-right-msg">msg exemplo</div>
          </div>

          <div className="contact-left d-flex justify-content-start mb-4">
            <div className="contact-left">@aluno1</div>
          </div>
          <div className="bubble-left d-flex justify-content-start mb-4">
            <div className="bubble-left-msg">msg exemplo</div>
          </div>

          <div className="contact-right d-flex justify-content-end mb-4">
            <div className="contact-right">Você</div>
          </div>

          <div className="bubble-right d-flex justify-content-end mb-4">
            <div className="bubble-right-msg">msg exemplo</div>
          </div>

          <div className="contact-left d-flex justify-content-start mb-4">
            <div className="contact-left">@aluno2</div>
          </div>

          <div className="bubble-left d-flex justify-content-start mb-4">
            <div className="bubble-left-msg">msg exemplo</div>
          </div>
        </div>

        <div className="row">
          <div className="type-msg input-group mb-3">
            <input
              type="text"
              className="form-control"
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
