export const getPageList = (list:any, pageInfo: any): void => {
    const pageSize = pageInfo.pageSize;
    const start = pageSize * (pageInfo.page - 1);
    const end = start + pageSize;
    return list.slice(start, end)
}