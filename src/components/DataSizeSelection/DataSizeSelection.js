import React from "react";
import {
  DataSizeWhrapper,
  DataSizeSelectionButton,
  DataSizeSelectionSpan,
  DataSizeSelectionWhrapper,
} from "./DataSizeSelection.elements";

function DataSizeSelection({ onFetchData }) {
  const fetchHandler = (e) => {
    e.preventDefault();
    onFetchData(e.target.value);
  };

  return (
    <DataSizeWhrapper>
      <DataSizeSelectionSpan>
        Выберете размер загружаемых данных
      </DataSizeSelectionSpan>
      <DataSizeSelectionWhrapper>
        <DataSizeSelectionButton onClick={fetchHandler} value={"big"}>
          Большой
        </DataSizeSelectionButton>
        <DataSizeSelectionButton onClick={fetchHandler} value={"small"}>
          Маленький
        </DataSizeSelectionButton>
      </DataSizeSelectionWhrapper>
    </DataSizeWhrapper>
  );
}

export default DataSizeSelection;
