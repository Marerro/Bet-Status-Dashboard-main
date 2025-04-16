import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 780px) {
    display: inline-block;
    text-align: center;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 3rem;
  font-family: "Arial", sans-serif;
  background-color: #f0f2f5;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const TitleParent = styled.div`
  width: 100%;
  min-width: 770px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #333;
  width: 100%;
  text-align: center;

  @media (max-width: 780px) {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #f0f2f5;

  @media (max-width: 480px) {
    table-layout: fixed;
  }
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

export const StatusTd = styled.td`
  padding: 14px 24px;
  color: #222;
  font-size: 14px;
  border-left: 4px solid #adb5bd;
  border-bottom: 1px solid #ddd;
`;

export const Row = styled.tr`
  background-color: #ffffff;

  &:nth-child(even) {
    background-color: #f8f9fa;
  }

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
  padding: 10px 20px;
  background-color: #96a29c
  border: none;
  border-radius: 8px;
`;

export const StatusContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: start;
  margin-bottom: 2rem;
`;
