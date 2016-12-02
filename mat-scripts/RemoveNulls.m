function [result] = RemoveNulls(dataset_name)

result = load('../mat-data/' + dataset_name);
result_cells = struct2cell(result(1,1));
return_mat = [];

% TODO: parse and remove nulls

for i=1:length(result_cells)
    try
        cell = cell2mat(result_cells(i));
        return_mat = [return_mat; cell];
    catch
        result_cells{i,1}{3} = 0;
        cell = cell2mat(result_cells{i});
        return_mat = [return_mat; cell];
    end
end
result = return_mat;
end
