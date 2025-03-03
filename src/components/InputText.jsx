import styled from "styled-components";

const InputTextWrapper = styled.input`
  width: 20rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function InputText(props) {
  return (
    <InputTextWrapper
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    ></InputTextWrapper>
  );
}

export default InputText;
