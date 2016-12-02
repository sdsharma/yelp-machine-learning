function return_mat = RemoveNulls(input)
    result_cells = struct2cell(input(1,1));
    return_mat = [];

    for i=1:length(result_cells)
        try
            cell = cell2mat(result_cells(i));
        catch
            result_cells{i,1}{3} = 0;
            cell = cell2mat(result_cells{i});
        end
        return_mat = [return_mat; cell];
    end
end
