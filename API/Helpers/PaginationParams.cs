using System;

namespace API.Helpers;

public class PaginationParams
{
private const int MaxPageSize = 50;

    public int PageNumber { get; set; } = 1;

    public int _pageSize { get; set; } = 10;

   
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
    }
}
