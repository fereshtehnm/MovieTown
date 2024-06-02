import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PaginationControlled(props: PaginationProps) {
  const { pageCount, currentPage, onPageChange } = props;

  return (
    <Stack spacing={2}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
      />
    </Stack>
  );
}
