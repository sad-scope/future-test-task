import React from "react";
import { SelectedUserWhrapper, Span, Paragraph } from "./SelectedUser.elements";

function SelectedUser({ selectedUser }) {
  return (
    <SelectedUserWhrapper>
      <Span>
        Выбран пользователь{" "}
        <b>{`${selectedUser.firstName} ${selectedUser.lastName} `}</b>
      </Span>
      <Paragraph>{selectedUser.description}</Paragraph>
      <Span>
        Адрес проживания: <b>{selectedUser.address.streetAddress}</b>
      </Span>
      <Span>
        Город: <b>{selectedUser.address.city}</b>
      </Span>
      <Span>
        Провинция/штат: <b>{selectedUser.address.state}</b>
      </Span>
      <Span>
        Индекс: <b>{selectedUser.address.zip}</b>
      </Span>
    </SelectedUserWhrapper>
  );
}

export default SelectedUser;
