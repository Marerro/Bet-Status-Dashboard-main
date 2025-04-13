import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-family: "Arial", sans-serif;
  background-color: #f0f2f5;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #333;
`;

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  background-color: #f0f2f5;
`;

export const Th = styled.th`
  background-color: #eaeaea;
  padding: 15px 25px;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  color: #333;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

export const Td = styled.td`
  padding: 14px 24px;
  color: #222;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;

export const StatusTd = styled.td<{ $status: string }>`
  padding: 14px 24px;
  color: #222;
  font-size: 14px;
  border-left: 4px solid
    ${({ $status }) =>
      $status === "Won"
        ? "#34c38f"
        : $status === "Lost"
        ? "#e4606d"
        : $status === "Pending"
        ? "#f0ad4e"
        : "#adb5bd"};
  border-bottom: 1px solid #ddd;
`;

export const Row = styled.tr`
  background-color: #ffffff;

  &:hover {
    background-color: #f1f3f5;
    cursor: pointer;
  }
`;

export const StatusBadge = styled.span<{ $status: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  min-width: 70px;
  text-align: center;
  color: white;

  background-color: ${({ $status }) =>
    $status === "Won"
      ? "#34c38f"
      : $status === "Lost"
      ? "#e4606d"
      : $status === "Pending"
      ? "#f0ad4e"
      : "#adb5bd"};
`;

export const StatusSelect = styled.select`
  padding: 5px 10px;
`;

export const StatusContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;
`;
