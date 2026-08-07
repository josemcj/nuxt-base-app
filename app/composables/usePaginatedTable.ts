import { ref } from 'vue';
import type { Ref } from 'vue';
import type { ApiMethod } from '@/types/paginatedTable';

export function usePaginatedTable<T>(
  fields: any[],
  apiMethod: ApiMethod<T> = async () => ({
    status: 200,
    data: {
      data: [],
      total: 0,
    },
  }),
  itemsPerPage: number = 10
) {
  const tableFields = fields;
  const tableItems: Ref<T[]> = ref([]);
  const currentPage = ref(1);
  const perPage = ref(itemsPerPage);
  const totalRows = ref(0);
  const isBusy = ref(false);
  const search = ref('');

  const fetchData = async (): Promise<void> => {
    isBusy.value = true;
    const response = await apiMethod(currentPage.value, perPage.value, search.value);
    isBusy.value = false;

    if (response?.status === 200) {
      const { data } = response;
      tableItems.value = data.data ?? [];
      totalRows.value = data.total ?? 1;
    }
  };

  const onSearch = (value: string): void => {
    search.value = value;
    fetchData();
  };

  const onTableChange = (currPage: number, itemsPerPage: number): void => {
    currentPage.value = currPage;
    perPage.value = itemsPerPage;
    fetchData();
  };

  const onPerPageChange = (itemsPerPage: number): void => {
    perPage.value = itemsPerPage;
    fetchData();
  };

  const onCurrentPageChange = (currPage: number): void => {
    currentPage.value = currPage;
    fetchData();
  };

  return {
    tableFields,
    tableItems,
    isBusy,
    currentPage,
    perPage,
    totalRows,
    fetchData,
    onSearch,
    onPerPageChange,
    onCurrentPageChange,
    onTableChange,
  };
}
