'use client';

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface PaginationProps {
  pageCount: number;
  currentPage: number;
}

export default function PaginationControlled(props: PaginationProps) {
  const router = useRouter()

  const { pageCount, currentPage } = props;
  const [page, setPage] = useState(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/movie?page=${value}`);

  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
        color="standard" 
      />
    </Stack>
  );
}
