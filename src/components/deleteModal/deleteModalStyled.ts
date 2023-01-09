import styled from "styled-components";
const DivDelete = styled.div`
  height: 16.375rem;
  width: 100%;
  margin: 0 auto;
  background-color: var(--Color-primary);
  margin-top: 10.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) {
    width: 31.25rem;
    height: 23.813rem;
    border-radius: 1.5rem;
    margin-top: 13.875rem;
  }
  .btnClose {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.75rem;
    color: var(--Grey-1);
  }
  .pDelete {
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
    color: var(--Grey-1);
  }
  .confirmDelete {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--Grey-1);
    margin-bottom: 2rem;
  }
`;
export default DivDelete;
