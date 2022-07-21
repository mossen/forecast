import { useMemo } from "react";

import Item from "./Item";
import styled from "styled-components";
import { City } from "../../../types";
import { useContext } from "../../../hooks/contextProvider";


const List: React.FC = () => {
  const { state } = useContext();

  /*
   * Improving performance to reduce calling this
   * function when items remains unchanged
   */
  const itemElements = useMemo(
    () =>
      state.cities &&
      state.cities?.map((item: City, index) => (
        <Item key={index} item={item} />
      )),
    [state.cities]
  );

  return state.cities ? (
    <Wrapper
      items={state.cities}
      role="listbox"
      className="mt-2 w-full bg-white rounded overflow-scroll shadow-lg absolute left-0 right-0"
    >
      {itemElements}
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div<{items: City[]|null}>`
  max-height: ${(props: any): string => (props.items.length ? "300px" : "auto")};
`;

export default List;
