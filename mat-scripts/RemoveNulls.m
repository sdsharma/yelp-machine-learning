function [result] = RemoveNulls(dataset_name)

result = load('../mat-data/' + dataset_name);
result_cells = struct2cell(result(1,1));

% TODO: parse and remove nulls

end